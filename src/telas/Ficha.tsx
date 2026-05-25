import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import Texto from '../componentes/Texto';

export default function Ficha() {
  const [nomePersonagem, setNomePersonagem] = useState('');
  const [pontos, setPontos] = useState('');
  const [pontosDesvantagens, setPontosDesvantagens] = useState('');
  
  const [forca, setForca] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [resistencia, setResistencia] = useState('');
  const [armadura, setArmadura] = useState('');
  const [poderFogo, setPoderFogo] = useState('');
  
  const [vantagens, setVantagens] = useState('');
  const [desvantagens, setDesvantagens] = useState('');

  // Abre o link do PDF do manual no navegador padrão
  const abrirManualPDF = () => {
    const urlManual = 'https://drive.google.com/file/d/1CD-tQC_gED1GXZfwiHYpT72ozMzPL_OK/view?usp=sharing'; // Podes colocar aqui um link direto do teu Google Drive/OneDrive
    Linking.openURL(urlManual).catch(() => alert('Não foi possível abrir o link do manual.'));
  };

  // Garante que não ocorrem erros se o utilizador deixar a caixa vazia
  const rCalculado = Number(resistencia) || 0;
  const pvs = rCalculado * 5;
  const pms = rCalculado * 5;

  return (
    <SafeAreaView style={styles.containerGeral}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.abaContainer}>
          
          <View style={styles.headerFicha}>
            <Texto style={styles.tituloSecao}>Ficha de Personagem</Texto>
            <TouchableOpacity style={styles.botaoPDF} onPress={abrirManualPDF}>
              <Texto style={styles.textoBotaoPDF}>Manual 3D&T</Texto>
            </TouchableOpacity>
          </View>
          
          <View style={styles.linhaDados}>
            <View style={styles.colunaMaior}>
              <Texto style={styles.label}>Nome:</Texto>
              <TextInput style={styles.input} value={nomePersonagem} onChangeText={setNomePersonagem} placeholder="Ex: Sandro Volúpia"/>
            </View>
            <View style={styles.colunaMenor}>
              <Texto style={styles.label}>Pontos:</Texto>
              <TextInput style={styles.inputCenter} value={pontos} onChangeText={setPontos} keyboardType="numeric" placeholder="0"/>
            </View>
          </View>

          <View style={styles.linhaDados}>
            <View style={{ width: '100%' }}>
              <Texto style={styles.label}>Pontos Extras (Desvantagens):</Texto>
              <TextInput style={styles.input} value={pontosDesvantagens} onChangeText={setPontosDesvantagens} keyboardType="numeric" placeholder="Ex: +3"/>
            </View>
          </View>

          <Texto style={styles.subTitulo}>Características Básicas</Texto>
          <View style={styles.gridAtributos}>
            <View style={styles.boxAtributo}>
              <Texto style={styles.labelFHRAP}>Força</Texto>
              <TextInput style={styles.inputAtributo} value={forca} onChangeText={setForca} keyboardType="numeric" maxLength={2} placeholder="0"/>
            </View>
            <View style={styles.boxAtributo}>
              <Texto style={styles.labelFHRAP}>Hab.</Texto>
              <TextInput style={styles.inputAtributo} value={habilidade} onChangeText={setHabilidade} keyboardType="numeric" maxLength={2} placeholder="0"/>
            </View>
            <View style={styles.boxAtributo}>
              <Texto style={styles.labelFHRAP}>Res.</Texto>
              <TextInput style={styles.inputAtributo} value={resistencia} onChangeText={setResistencia} keyboardType="numeric" maxLength={2} placeholder="0"/>
            </View>
            <View style={styles.boxAtributo}>
              <Texto style={styles.labelFHRAP}>Arm.</Texto>
              <TextInput style={styles.inputAtributo} value={armadura} onChangeText={setArmadura} keyboardType="numeric" maxLength={2} placeholder="0"/>
            </View>
            <View style={styles.boxAtributo}>
              <Texto style={styles.labelFHRAP}>PdF</Texto>
              <TextInput style={styles.inputAtributo} value={poderFogo} onChangeText={setPoderFogo} keyboardType="numeric" maxLength={2} placeholder="0"/>
            </View>
          </View>

          <View style={styles.linhaDados}>
            <View style={styles.boxStatus}>
              <Texto style={styles.labelStatus}>PVs (R x 5)</Texto>
              <Texto style={styles.valorStatus}>{pvs}</Texto>
            </View>
            <View style={styles.boxStatus}>
              <Texto style={styles.labelStatus}>PMs (R x 5)</Texto>
              <Texto style={styles.valorStatus}>{pms}</Texto>
            </View>
          </View>

          <Texto style={styles.label}>Vantagens:</Texto>
          <TextInput style={styles.inputArea} value={vantagens} onChangeText={setVantagens} multiline numberOfLines={3} placeholder="Ex: Magia Branca..."/>

          <Texto style={styles.label}>Desvantagens:</Texto>
          <TextInput style={styles.inputArea} value={desvantagens} onChangeText={setDesvantagens} multiline numberOfLines={3} placeholder="Ex: Maldição..."/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGeral: { flex: 1, backgroundColor: '#f0f0f5' },
  scrollContainer: { flexGrow: 1 },
  abaContainer: { padding: 20, width: '100%', maxWidth: 600, alignSelf: 'center' },
  headerFicha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  tituloSecao: { fontSize: 22, fontWeight: 'bold', color: '#c8102e', textAlign: 'center' },
  botaoPDF: { backgroundColor: '#c8102e', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
  textoBotaoPDF: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  linhaDados: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, width: '100%' },
  colunaMaior: { width: '68%' },
  colunaMenor: { width: '28%' },
  subTitulo: { fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 10, marginBottom: 10 },
  gridAtributos: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, width: '100%' },
  boxAtributo: { width: '18%', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 10, borderRadius: 8, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2 },
  labelFHRAP: { fontWeight: 'bold', fontSize: 12, marginBottom: 5 },
  inputAtributo: { fontSize: 20, fontWeight: 'bold', color: '#c8102e', textAlign: 'center', width: '100%' },
  boxStatus: { width: '48%', backgroundColor: '#333', padding: 15, borderRadius: 8, alignItems: 'center' },
  labelStatus: { color: '#fff', fontSize: 12 },
  valorStatus: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 5 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, fontSize: 16, width: '100%' },
  inputCenter: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, fontSize: 16, textAlign: 'center', width: '100%' },
  inputArea: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, fontSize: 16, textAlignVertical: 'top', marginBottom: 15, width: '100%' },
});