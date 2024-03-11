import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  loading: {
    marginTop: '60%',
    transform: [{ scale: 3 }],
  },
  filmeScrollView: {
    width: '100%',
  },
  filmeView: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  filmeImage: {
    height: 300,
    resizeMode: 'contain', // Adicionado para fazer a imagem se adaptar
  },
  filmeTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 10,
    flexShrink: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center', // Add this line to center the text vertically
  },
});