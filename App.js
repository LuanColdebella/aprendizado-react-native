import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import UseContext from './conteudos/useContext';
import UseEffect from './conteudos/useEffect';
import UseMemo from './conteudos/useMemo';
import UseRef from './conteudos/useRef';
import UseState from './conteudos/useState';


const mapaConteudos = {
  A: UseState,
  B: UseEffect,
  C: UseContext,
  D: UseMemo,
  E: UseRef,

};

export default function App() {
  const [tipo, setTipo] = useState('A');

  const ComponenteSelecionado = mapaConteudos[tipo] || (() => (
    <Text style={styles.naoEncontrado}>Conteúdo não encontrado</Text>
  ));

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Renderizador de Conteúdo</Text>

        <ScrollView style={styles.conteudoBox}>
          <ComponenteSelecionado />
        </ScrollView>

        <View style={styles.botoes}>
          <Button title="useState" onPress={() => setTipo('A')} />
          <Button title="useEffect" onPress={() => setTipo('B')} />
          <Button title="useContext" onPress={() => setTipo('C')} />
          <Button title="useMemo" onPress={() => setTipo('D')} />
          <Button title="useRef" onPress={() => setTipo('E')} />

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: 'center',
    padding: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conteudoBox: {
    flex: 1,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 3,
  },
  naoEncontrado: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
