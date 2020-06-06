import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [numeros, setNumeros] = useState([]);

  const gerarMegaSena = () => {

    let numeros = [];

    while(numeros.length != 6) {
      let gerador = Math.floor(Math.random() * 60) + 1;
      numeros.push(gerador);

      numeros = numeros.filter((item, index) => {
        return numeros.indexOf(item) === index;
      });
    }

    alert(numeros)
    setNumeros( [ numeros ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Text style={ styles.tituloText }>TESTE SUA SORTE!</Text>
        <Text style={ styles.subTituloText }> { numeros.map(numero => `${numero}`) }</Text>
        <Button 
          title="Gerar números da MEGA SENA"
          onPress={gerarMegaSena}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tituloText: {
        marginBottom: 16, fontSize: 28, color: '#c62828'
    },
    subTituloText: {
        marginBottom: 16, fontSize: 24, color: '#ef5350'
    },
    cardView: {
      textAlign: 'center',
      borderWidth: 3,
      borderColor: '#f44336',
      padding: 15,
      backgroundColor: '#ffebee',
      borderRadius: 10,
      boxShadow: 'inset 0 0 1em gold, 0 0 1em #ef5350'
    }
});