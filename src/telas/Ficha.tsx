import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import Texto from '../componentes/Texto';

export default function Ficha() {
  // Cabeçalho
  const [nomePersonagem, setNomePersonagem] = useState('');
  const [pontos, setPontos] = useState('');
  const [pontosDesvantagens, setPontosDesvantagens] = useState('');
  
  // Características
  const [forca, setForca] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [resistencia, setResistencia] = useState('');
  const [armadura, setArmadura] = useState('');
  const [poderFogo, setPoderFogo] = useState('');
  
  // Status Atuais
  const [pvsAtual, setPvsAtual] = useState('');
  const [pmsAtual, setPmsAtual] = useState('');
  const [pes, setPes] = useState('');

  // Vantagens (Pontos Extras Comprados)
  const [pvExtra, setPvExtra] = useState('');
  const [pmExtra, setPmExtra] = useState('');

  // Textos
  const [vantagens, setVantagens] = useState('');
  const [desvantagens, setDesvantagens] = useState('');
  const [tiposDano, setTiposDano] = useState('');
  const [magias, setMagias] = useState('');
  const [dinheiro, setDinheiro] = useState('');
  const [historia, setHistoria] = useState('');

  const abrirManualPDF = () => {
    const urlDrive = 'https://drive.google.com/file/d/1CD-tQC_gED1GXZfwiHYpT72ozMzPL_OK/view?usp=sharing'; 
    Linking.openURL(urlDrive).catch(() => alert('Não foi possível abrir o link do manual.'));
  };

  // MATEMÁTICA OFICIAL 3D&T ALPHA:
  // R=0 garante 1 PV/PM. Vantagens Extras dão +10 por ponto comprado.
  const rCalc = Number(resistencia) || 0;
  const baseStatus = rCalc === 0 ? 1 : rCalc * 5;
  
  const maxPV = baseStatus + (Number(pvExtra) || 0) * 10;
  const maxPM = baseStatus + (Number(pmExtra) || 0) * 10;

  return (
    <SafeAreaView style={styles.containerGeral}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.abaContainer}>
          
          <View style={styles.headerFicha}>
            <Texto style={styles.tituloSecao}>FICHA DE PERSONAGEM</Texto>
            <TouchableOpacity style={styles.botaoPDF} onPress={abrirManualPDF}>
              <Texto style={styles.textoBotaoPDF}>MANUAL 3D&T</Texto>
            </TouchableOpacity>
          </View>
          
          {/* TOPO DA FOLHA COM 3 COLUNAS */}
          <View style={styles.linhaDados}>
            <View style={styles.colunaNome}>
              <Texto style={styles.label}>NOME</Texto>
              <TextInput style={styles.input} value={nomePersonagem} onChangeText={setNomePersonagem} placeholder="Seu personagem" placeholderTextColor="#ffffff34"/>
            </View>
            <View style={styles.colunaPts}>
              <Texto style={styles.label}>PTS</Texto>
              <TextInput style={styles.inputCenter} value={pontos} onChangeText={setPontos} keyboardType="numeric" placeholder="0" placeholderTextColor="#ffffff34"/>
            </View>
            <View style={styles.colunaPts}>
              <Texto style={styles.label}>EXTRA</Texto>
              <TextInput style={styles.inputCenter} value={pontosDesvantagens} onChangeText={setPontosDesvantagens} keyboardType="numeric" placeholder="+0" placeholderTextColor="#ffffff34"/>
            </View>
          </View>

          <View style={styles.gridFolha}>
            
            {/* LADO ESQUERDO */}
            <View style={styles.colunaEsquerda}>
              <Texto style={styles.subTitulo}>Características</Texto>
              
              <View style={styles.linhaAtributo}>
                <View style={styles.barraAtributo}>
                  <Texto style={styles.letraDestaque}>F</Texto>
                  <Texto style={styles.textoAtributo}>ORÇA</Texto>
                </View>
                <TextInput style={styles.inputQuadrado} value={forca} onChangeText={setForca} keyboardType="numeric" maxLength={2} placeholder="0" placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.linhaAtributo}>
                <View style={styles.barraAtributo}>
                  <Texto style={styles.letraDestaque}>H</Texto>
                  <Texto style={styles.textoAtributo}>ABILIDADE</Texto>
                </View>
                <TextInput style={styles.inputQuadrado} value={habilidade} onChangeText={setHabilidade} keyboardType="numeric" maxLength={2} placeholder="0" placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.linhaAtributo}>
                <View style={styles.barraAtributo}>
                  <Texto style={styles.letraDestaque}>R</Texto>
                  <Texto style={styles.textoAtributo}>ESISTÊNCIA</Texto>
                </View>
                <TextInput style={styles.inputQuadrado} value={resistencia} onChangeText={setResistencia} keyboardType="numeric" maxLength={2} placeholder="0" placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.linhaAtributo}>
                <View style={styles.barraAtributo}>
                  <Texto style={styles.letraDestaque}>A</Texto>
                  <Texto style={styles.textoAtributo}>RMADURA</Texto>
                </View>
                <TextInput style={styles.inputQuadrado} value={armadura} onChangeText={setArmadura} keyboardType="numeric" maxLength={2} placeholder="0" placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.linhaAtributo}>
                <View style={styles.barraAtributo}>
                  <Texto style={styles.letraDestaque}>P</Texto>
                  <Texto style={styles.textoAtributo}>ODER DE FOGO</Texto>
                </View>
                <TextInput style={styles.inputQuadrado} value={poderFogo} onChangeText={setPoderFogo} keyboardType="numeric" maxLength={2} placeholder="0" placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.espacoVertical} />
              
              {/* BLOCO DE STATUS COM RECONHECIMENTO DE VANTAGENS */}
              <View style={styles.linhaStatus}>
                <Texto style={styles.labelStatusFolha}>Pontos de Vida</Texto>
                <View style={styles.containerExtra}>
                  <Texto style={styles.labelExtra}>PTS EXTRA</Texto>
                  <TextInput style={styles.inputExtra} value={pvExtra} onChangeText={setPvExtra} keyboardType="numeric" placeholder="0" placeholderTextColor="#ffffff34"/>
                </View>
                <TextInput style={styles.inputStatusFolha} value={pvsAtual} onChangeText={setPvsAtual} keyboardType="numeric" placeholder={`Máx: ${maxPV}`} placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.linhaStatus}>
                <Texto style={styles.labelStatusFolha}>Pontos de Magia</Texto>
                <View style={styles.containerExtra}>
                  <Texto style={styles.labelExtra}>PTS EXTRA</Texto>
                  <TextInput style={styles.inputExtra} value={pmExtra} onChangeText={setPmExtra} keyboardType="numeric" placeholder="0" placeholderTextColor="#ffffff34"/>
                </View>
                <TextInput style={styles.inputStatusFolha} value={pmsAtual} onChangeText={setPmsAtual} keyboardType="numeric" placeholder={`Máx: ${maxPM}`} placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.linhaStatus}>
                <Texto style={styles.labelStatusFolha}>Pontos de Exp.</Texto>
                <TextInput style={styles.inputStatusUnico} value={pes} onChangeText={setPes} keyboardType="numeric" placeholder="0" placeholderTextColor="#ffffff34"/>
              </View>

              <View style={styles.espacoVertical} />
              
              <Texto style={styles.subTituloBox}>Vantagens</Texto>
              <TextInput style={styles.inputAreaEsquerda} value={vantagens} onChangeText={setVantagens} multiline numberOfLines={5} placeholder="..." placeholderTextColor="#ffffff34"/>

              <Texto style={styles.subTituloBox}>Desvantagens</Texto>
              <TextInput style={styles.inputAreaEsquerda} value={desvantagens} onChangeText={setDesvantagens} multiline numberOfLines={5} placeholder="..." placeholderTextColor="#ffffff34"/>
            </View>

            {/* LADO DIREITO */}
            <View style={styles.colunaDireita}>
              <Texto style={styles.subTituloBox}>Tipos de Dano</Texto>
              <TextInput style={styles.inputAreaPadrao} value={tiposDano} onChangeText={setTiposDano} placeholder="Ex: Corte, Perfuração..." placeholderTextColor="#ffffff34"/>

              <Texto style={styles.subTituloBox}>Magias Conhecidas</Texto>
              <TextInput style={styles.inputAreaPadrao} value={magias} onChangeText={setMagias} multiline numberOfLines={4} placeholder="..." placeholderTextColor="#ffffff34"/>

              <Texto style={styles.subTituloBox}>Dinheiro e Itens</Texto>
              <TextInput style={styles.inputAreaPadrao} value={dinheiro} onChangeText={setDinheiro} multiline numberOfLines={4} placeholder="..." placeholderTextColor="#ffffff34"/>

              <Texto style={styles.subTituloBox}>História</Texto>
              <TextInput style={styles.inputAreaPadrao} value={historia} onChangeText={setHistoria} multiline numberOfLines={6} placeholder="Sua origem..." placeholderTextColor="#ffffff34"/>

              
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGeral: { flex: 1, backgroundColor: '#1a1a1a' },
  scrollContainer: { flexGrow: 1 },
  abaContainer: { padding: 25, width: '100%', maxWidth: 700, alignSelf: 'center', paddingTop: 30 },
  
  headerFicha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  tituloSecao: { fontSize: 20, fontWeight: '900', color: '#bbff00', letterSpacing: 2 },
  botaoPDF: { backgroundColor: '#287e55', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 50, borderWidth: 1, borderColor: '#bbff00' },
  textoBotaoPDF: { color: '#fff', fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  
  // NOVO LAYOUT DE 3 COLUNAS NO TOPO
  linhaDados: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, width: '100%' },
  colunaNome: { width: '56%' },
  colunaPts: { width: '20%' },
  
  label: { fontSize: 12, fontWeight: '900', marginBottom: 5, color: '#3dbd70', letterSpacing: 2, backgroundColor: '#2e2e2e', padding: 5, paddingLeft: 10, borderWidth: 1, borderColor: '#3dbd70' },
  input: { backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', padding: 10, fontSize: 16, width: '100%', color: '#fff', borderTopWidth: 0 },
  inputCenter: { backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', padding: 10, fontSize: 16, textAlign: 'center', width: '100%', color: '#fff', borderTopWidth: 0 },
  
  gridFolha: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' },
  colunaEsquerda: { width: '100%', marginBottom: 20 },
  colunaDireita: { width: '100%' },
  
  subTitulo: { fontSize: 16, fontWeight: '900', color: '#1a1a1a', backgroundColor: '#3dbd70', padding: 8, marginBottom: 15, letterSpacing: 2, textTransform: 'uppercase', textAlign: 'center' },
  subTituloBox: { fontSize: 14, fontWeight: '900', color: '#3dbd70', marginBottom: 5, marginTop: 10, letterSpacing: 1 },
  espacoVertical: { height: 15 },

  linhaAtributo: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, justifyContent: 'space-between' },
  barraAtributo: { flexDirection: 'row', backgroundColor: '#2e2e2e', flex: 1, alignItems: 'center', borderWidth: 1, borderColor: '#3dbd70', paddingRight: 10 },
  letraDestaque: { color: '#1a1a1a', backgroundColor: '#bbff00', fontSize: 20, fontWeight: '900', paddingVertical: 5, paddingHorizontal: 12 },
  textoAtributo: { color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 2, marginLeft: 10 },
  inputQuadrado: { width: 55, height: 42, backgroundColor: '#1a1a1a', borderWidth: 2, borderColor: '#bbff00', color: '#bbff00', fontSize: 22, fontWeight: '900', textAlign: 'center', marginLeft: 10 },

  linhaStatus: { flexDirection: 'row', alignItems: 'stretch', marginBottom: 8, justifyContent: 'space-between' },
  labelStatusFolha: { fontSize: 13, fontWeight: '900', color: '#fff', backgroundColor: '#2e2e2e', flex: 1, paddingVertical: 12, paddingLeft: 10, borderWidth: 1, borderColor: '#3dbd70', textAlignVertical: 'center' },
  
  containerExtra: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', borderLeftWidth: 0, paddingHorizontal: 8 },
  labelExtra: { fontSize: 8, color: '#3dbd70', fontWeight: 'bold', marginBottom: 2 },
  inputExtra: { color: '#bbff00', fontSize: 14, fontWeight: 'bold', textAlign: 'center', height: 20, padding: 0 },

  inputStatusFolha: { width: 95, backgroundColor: '#1a1a1a', borderWidth: 2, borderColor: '#3dbd70', color: '#bbff00', fontSize: 18, fontWeight: '900', textAlign: 'center', marginLeft: 8 },
  inputStatusUnico: { width: 140, backgroundColor: '#1a1a1a', borderWidth: 2, borderColor: '#3dbd70', color: '#bbff00', fontSize: 18, fontWeight: '900', textAlign: 'center', marginLeft: 8 },

  inputAreaEsquerda: { backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', padding: 10, fontSize: 14, textAlignVertical: 'top', marginBottom: 10, color: '#fff' },
  inputAreaPadrao: { backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', padding: 10, fontSize: 14, textAlignVertical: 'top', marginBottom: 10, color: '#fff' },


});