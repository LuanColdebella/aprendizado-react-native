import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  // Carrega o nome salvo ao iniciar
  useEffect(() => {
    const carregarNome = async () => {
      try {
        const nomeSalvo = await AsyncStorage.getItem('nome');
        if (nomeSalvo) {
          setNome(nomeSalvo);
        }
      } catch (error) {
        console.log('Erro ao carregar nome:', error);
      }
    };

    carregarNome();
  }, []);

  // Salva o nome sempre que ele mudar
  useEffect(() => {
    const salvarNome = async () => {
      try {
        await AsyncStorage.setItem('nome', nome);
      } catch (error) {
        console.log('Erro ao salvar nome:', error);
      }
    };

    if (nome.length > 0) {
      salvarNome();
    }
  }, [nome]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome aqui"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.resultado}>Olá, {nome}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});