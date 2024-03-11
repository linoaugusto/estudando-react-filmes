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
    paddingVertical: 20,
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
  filmeScrollView: {
    width: '100%',
  },
  filmeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 150,
    height: 150,
  },
  filmeTituloView: {
    flex: 1,
    alignItems: 'flex-start',  
    flexWrap: 'wrap',
  },
  filmeTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 10,
    flexShrink: 1,
  },
});