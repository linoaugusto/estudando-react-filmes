import React, { useState, useEffect, } from 'react';
import { ActivityIndicator, SafeAreaView } from "react-native";
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { styles } from './styles';


const App = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLoadButton = async () => {
    setLoading(true);
    const requisicao = await axios.get('https://api.b7web.com.br/cinema');

    console.log(requisicao.data);

    if (requisicao.data.length > 0) {
      setFilmes(requisicao.data);
      setLoading(false);
    }
  }

  const handleOrderFilmes = () => {
    let newFilmes = [...filmes];
    newFilmes.sort((a: any, b: any) => {
      return a.titulo > b.titulo ? 1 : -1;
    });

    // Check if the current order is ascending
    const isAscending = JSON.stringify(filmes) === JSON.stringify(newFilmes);

    // Reverse the order if it's ascending, otherwise keep it as is
    setFilmes(isAscending ? newFilmes.reverse() : newFilmes);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleLoadButton}>
            <Text>Carregar Filmes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleOrderFilmes}>
            <Text>Ordenar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => setFilmes([])}>
            <Text>Limpar</Text>
          </TouchableOpacity>
        </View>

      </View>
      {loading && <ActivityIndicator style={styles.loading} animating={loading} /> }
      
      <ScrollView style={styles.filmeScrollView}>
        {filmes.length > 0 && !loading && filmes.map((item: any, key: number) => (
          <View key={key} style={styles.filmeView}>
            <Image source={{ uri: item.avatar }} style={styles.filmeImage}></Image>
            <Text style={styles.filmeTitulo}>{item.titulo}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
