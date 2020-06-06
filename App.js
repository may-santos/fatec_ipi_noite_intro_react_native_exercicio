import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  let [numeros, setNumeros] = useState([]);

  const gerarMegaSena = () => {
    numeros = [] // limpa o array anterior.
    while(numeros.length != 6) { // vai verificar se já tem 6 números, se não tiver, vai rodar o comando.
      numeros.push(Math.floor(Math.random() * 60) + 1); // gera número aleatório entre 1 e 60 e armazena em numeros.push

      numeros = numeros.filter((item, index) => { // verifica se há números repetidos.
        return numeros.indexOf(item) === index;
      });
    }

    setNumeros( [ numeros ]); // seta o array de 6 números aleatórios.
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Text style={ styles.tituloText }>TESTE SUA SORTE!</Text>
        <Button 
          title="Gerar números da MEGA SENA"
          onPress={gerarMegaSena}
        />
        <Text style={ styles.subTituloText }> { numeros.map(numero => `${numero}`) }</Text>
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
        marginTop: 16, fontSize: 24, color: '#ef5350'
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