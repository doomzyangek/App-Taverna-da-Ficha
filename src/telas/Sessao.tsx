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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.abaContainer}>
          <Texto style={styles.tituloSecao}>SESSÃO ATUAL</Texto>
          


          <View style={styles.cardSessao}>
            <Texto style={styles.label}>TÍTULO DA SESSÃO:</Texto>
            <TextInput 
              style={styles.input} 
              value={titulo} 
              onChangeText={setTitulo} 
              placeholder="Nome da sessão..."
              placeholderTextColor="#ffffff34"
            />
            
            <Texto style={styles.label}>PERSONAGENS:</Texto>
            <TextInput 
              style={styles.inputArea} 
              value={personagens} 
              onChangeText={setPersonagens} 
              multiline 
              numberOfLines={2} 
              placeholder="Personagens presentes na sessão..."
              placeholderTextColor="#ffffff34"
            />

            <Texto style={styles.label}>HISTÓRIA DA SESSÃO:</Texto>
            <TextInput 
              style={styles.inputArea} 
              value={historia} 
              onChangeText={setHistoria} 
              multiline 
              numberOfLines={5} 
              placeholder="Descreva o andamento da sessão..."
              placeholderTextColor="#ffffff34"
            />

            <Texto style={styles.label}>ANOTAÇÕES:</Texto>
            <TextInput 
              style={styles.inputArea} 
              value={anotacoes} 
              onChangeText={setAnotacoes} 
              multiline 
              numberOfLines={4} 
              placeholder="Senhas, status de inimigos..."
              placeholderTextColor="#ffffff34"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGeral: { flex: 1, backgroundColor: '#1a1a1a' },
  scrollContainer: { flexGrow: 1 },
  abaContainer: { padding: 25, width: '100%', maxWidth: 600, alignSelf: 'center', paddingTop: 40 },
  tituloSecao: { fontSize: 24, fontWeight: '900', color: '#bbff00', marginBottom: 25, textAlign: 'center', letterSpacing: 4 },
  


  cardSessao: { backgroundColor: '#2e2e2e', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#3dbd70' },
  label: { fontSize: 11, fontWeight: '700', marginBottom: 8, marginTop: 15, color: '#3dbd70', letterSpacing: 2 },
  input: { backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', borderRadius: 8, padding: 15, fontSize: 16, color: '#fff' },
  inputArea: { backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', borderRadius: 8, padding: 15, fontSize: 16, color: '#fff', textAlignVertical: 'top' },
});