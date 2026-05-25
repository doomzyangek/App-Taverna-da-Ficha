import React, { useState, useRef } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Texto from '../componentes/Texto';

export default function Perfil() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [sessoesJogadas, setSessoesJogadas] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  
  const [mostrandoCamera, setMostrandoCamera] = useState(false);
  const [permissao, solicitarPermissao] = useCameraPermissions();
  const cameraRef = useRef<any>(null);

  const capturarFoto = async () => {
    if (cameraRef.current) {
      try {
        const foto = await cameraRef.current.takePictureAsync();
        setFotoPerfil(foto.uri);
        setMostrandoCamera(false);
      } catch (error) {
        alert('Erro ao capturar a foto.');
      }
    }
  };

  const abrirCamera = async () => {
    if (!permissao?.granted) {
      const { granted } = await solicitarPermissao();
      if (!granted) {
        alert('Você precisa liberar o acesso à câmera!');
        return;
      }
    }
    setMostrandoCamera(true);
  };

  if (mostrandoCamera) {
    return (
      <SafeAreaView style={styles.containerCamera}>
        <CameraView style={styles.camera} facing="front" ref={cameraRef}>
          <View style={styles.botoesCameraContainer}>
            <TouchableOpacity style={styles.botaoCancelarCamera} onPress={() => setMostrandoCamera(false)}>
              <Texto style={styles.textoBotaoBranco}>CANCELAR</Texto>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCapturar} onPress={capturarFoto}>
              <Texto style={styles.textoBotaoBranco}>CAPTURAR</Texto>
            </TouchableOpacity>
          </View>
        </CameraView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.containerGeral}>
      <ScrollView contentContainerStyle={styles.abaContainer}>
        <Texto style={styles.tituloSecao}>PERFIL DO JOGADOR</Texto>
        
        <View style={styles.cardPerfil}>
          <TouchableOpacity style={styles.avatarContainer} onPress={abrirCamera}>
            {fotoPerfil ? (
              <Image source={{ uri: fotoPerfil }} style={styles.avatarImagem} />
            ) : (
              <Texto style={styles.avatarTexto}>[¯◉°]</Texto>
            )}
          </TouchableOpacity>

          <Texto style={styles.label}>Nickname:</Texto>
          <TextInput 
            style={styles.input} 
            value={nomeUsuario}
            onChangeText={setNomeUsuario}
            placeholder="Seu nome..."
            placeholderTextColor="#ffffff34"
          />

          <View style={styles.estatisticasPerfil}>
            <Texto style={styles.label}>Sessões Jogadas:</Texto>
            <TextInput 
              style={styles.inputDestaque} 
              value={sessoesJogadas}
              onChangeText={setSessoesJogadas}
              keyboardType="numeric"
              textAlign="center"
              placeholder="..."
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
  abaContainer: { padding: 30, width: '100%', maxWidth: 600, alignSelf: 'center', paddingTop: 50 },
  tituloSecao: { fontSize: 26, fontWeight: '900', color: '#bbff00', marginBottom: 25, textAlign: 'center', letterSpacing: 4 },
  
  cardPerfil: { backgroundColor: '#2e2e2e', padding: 25, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: '#3dbd70', elevation: 8, shadowColor: '#3dbd70', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 10 },
  
  avatarContainer: { width: 130, height: 130, borderRadius: 65, backgroundColor: '#1a1a1a', justifyContent: 'center', alignItems: 'center', marginBottom: 25, overflow: 'hidden', borderWidth: 2, borderColor: '#3dbd70' },
  avatarImagem: { width: '100%', height: '100%' },
  avatarTexto: { color: '#bbff00', fontWeight: 'bold', letterSpacing: 1, fontSize: 12 ,  textShadowColor: '#bbff00', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 },
  
  label: { fontSize: 12, fontWeight: '700', color: '#3dbd70', marginBottom: 8, alignSelf: 'flex-start', width: '100%', textTransform: 'uppercase', letterSpacing: 2 },
  input: { backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', borderRadius: 8, padding: 15, fontSize: 18, color: '#bbff00', width: '100%', marginBottom: 25 , textShadowColor: '#bbff00', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 4 },
  
  estatisticasPerfil: { alignItems: 'center', width: '100%' },
  inputDestaque: { fontSize: 40, fontWeight: '900', color: '#bbff00', backgroundColor: '#1a1a1a', borderWidth: 1, borderColor: '#3dbd70', borderRadius: 12, padding: 15, width: '100%', textShadowColor: '#bbff00', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 , textAlign: 'center' },
  
  // Camera
  containerCamera: { flex: 1, backgroundColor: '#1a1a1a' },
  camera: { flex: 1, justifyContent: 'flex-end' },
  botoesCameraContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 30, backgroundColor: 'rgba(26, 26, 26, 0.9)' },
  botaoCancelarCamera: { backgroundColor: '#2e2e2e', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 50, borderWidth: 1, borderColor: '#3dbd70' },
  botaoCapturar: { backgroundColor: '#287e55', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 50, borderWidth: 1, borderColor: '#bbff00' },
  textoBotaoBranco: { color: '#fff', fontWeight: '900', fontSize: 14, letterSpacing: 2 },
});