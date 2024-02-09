import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  // Estilos del botón
  boton: {
    backgroundColor: '#000000', // Fondo negro para el botón
    padding: 10,
    borderRadius: 5,
    borderColor: '#bdbdbd',
    borderWidth: 2,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  textoB: {
    color: 'white', // Cambio a color blanco para mejorar la legibilidad sobre fondo negro
    fontSize: 20,
  },
  logoB: {
    height: 35,
    width: 35,
    marginRight: 7,
  },
  // Estilos de la caja
  boxContainer: {
    backgroundColor: '#000000', // Fondo negro para la caja
    borderColor: '#bdbdbd',
    borderWidth: 2,
    borderRadius: 5,
    height: 70,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  TextBox: {
    color: 'white', // Cambio a color blanco para mejorar la legibilidad sobre fondo negro
    fontSize: 30,
  },
  // Estilo del contenedor de los botones
  botonescontainer: {
    backgroundColor: '#000000', // Opcionalmente, fondo negro para el contenedor de botones si lo deseas
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
