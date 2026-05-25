import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Texto from '../componentes/Texto';

export default function Sessao() {
  const [titulo, setTitulo] = useState('');
  const [historia, setHistoria] = useState('');
  const [personagens, setPersonagens] = useState('');
  const [anotacoes, setAnotacoes] = useState('');

  return (
    <SafeAreaView style={styles.containerGeral}>
      <ScrollView contentContainerStyle={styles.abaContainer}>
        <Texto style={styles.tituloSecao}>Sessão Atual</Texto>
        
        <View style={styles.cardSessao}>
          <Texto style={styles.label}>Título da Sessão:</Texto>
          <TextInput 
            style={styles.input} 
            value={titulo} 
            onChangeText={setTitulo} 
            placeholder="Ex: Invasão à Cidadela"
          />
          
          <Texto style={styles.label}>Personagens Presentes:</Texto>
          <TextInput 
            style={styles.inputArea} 
            value={personagens} 
            onChangeText={setPersonagens} 
            multiline 
            numberOfLines={2} 
            placeholder="Nome dos PCs e NPCs importantes..."
          />

          <Texto style={styles.label}>História / Acontecimentos:</Texto>
          <TextInput 
            style={styles.inputArea} 
            value={historia} 
            onChangeText={setHistoria} 
            multiline 
            numberOfLines={5} 
            placeholder="O que está acontecendo agora?"
          />

          <Texto style={styles.label}>Anotações Secretas (Mestre):</Texto>
          <TextInput 
            style={styles.inputArea} 
            value={anotacoes} 
            onChangeText={setAnotacoes} 
            multiline 
            numberOfLines={4} 
            placeholder="Lembretes, PV dos inimigos, armadilhas..."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGeral: { flex: 1, backgroundColor: '#f0f0f5' },
  abaContainer: { padding: 20 },
  tituloSecao: { fontSize: 22, fontWeight: 'bold', color: '#c8102e', marginBottom: 20, textAlign: 'center' },
  cardSessao: { backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 3 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 5, marginTop: 10 },
  input: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, color: '#333' },
  inputArea: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, textAlignVertical: 'top' },
});