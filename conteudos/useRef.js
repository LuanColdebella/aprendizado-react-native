import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [textoFinal, setTextoFinal] = useState('');
  const inputRef = useRef(null);
  
  const handleAdicionar = () => {
    setTextoFinal(texto);
    setTexto('');
    focarInput();
  };

  const handleLimpar = () => {
    setTexto('');
    setTextoFinal('');
    focarInput();
  };

  const focarInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite algo:</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Escreva aqui..."
        value={texto}
        onChangeText={setTexto}
        autoCapitalize="none"
      />

      <View style={styles.botoes}>
        <TouchableOpacity onPress={handleAdicionar}>
          <Text style={styles.botao}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLimpar}>
          <Text style={styles.botao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>Você digitou: {textoFinal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  botao: {
    color: 'blue',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 16,
    color: '#333',
  },
});
