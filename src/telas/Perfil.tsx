import React, { useState, useRef } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Texto from '../componentes/Texto';

export default function Perfil() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [sessoesJogadas, setSessoesJogadas] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  
  // Estados e Referências da Câmera reativados
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
    // Pede permissão para o Navegador ou Celular
    if (!permissao?.granted) {
      const { granted } = await solicitarPermissao();
      if (!granted) {
        alert('Você precisa liberar o acesso à câmera no seu navegador ou celular!');
        return;
      }
    }
    setMostrandoCamera(true);
  };

  // Se a câmera estiver aberta, renderiza a tela de captura sobrepondo o resto
  if (mostrandoCamera) {
    return (
      <SafeAreaView style={styles.containerCamera}>
        <CameraView style={styles.camera} facing="front" ref={cameraRef}>
          <View style={styles.botoesCameraContainer}>
            <TouchableOpacity style={styles.botaoCancelarCamera} onPress={() => setMostrandoCamera(false)}>
              <Texto style={styles.textoBotaoBranco}>Voltar</Texto>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCapturar} onPress={capturarFoto}>
              <Texto style={styles.textoBotaoBranco}>Capturar Foto</Texto>
            </TouchableOpacity>
          </View>
        </CameraView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.containerGeral}>
      <ScrollView contentContainerStyle={styles.abaContainer}>
        <Texto style={styles.tituloSecao}>Perfil do Jogador</Texto>
        
        <View style={styles.cardPerfil}>
          {/* Botão agora chama a função real de abrir a câmera */}
          <TouchableOpacity style={styles.avatarContainer} onPress={abrirCamera}>
            {fotoPerfil ? (
              <Image source={{ uri: fotoPerfil }} style={styles.avatarImagem} />
            ) : (
              <Texto style={styles.avatarTexto}>Tirar Foto</Texto>
            )}
          </TouchableOpacity>

          <Texto style={styles.label}>Nome:</Texto>
          <TextInput 
            style={styles.input} 
            value={nomeUsuario}
            onChangeText={setNomeUsuario}
            placeholder="O teu nome..."
          />

          <View style={styles.estatisticasPerfil}>
            <Texto style={styles.label}>Sessões Jogadas:</Texto>
            <TextInput 
              style={styles.inputDestaque} 
              value={sessoesJogadas}
              onChangeText={setSessoesJogadas}
              keyboardType="numeric"
              textAlign="center"
              placeholder="0"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGeral: { flex: 1, backgroundColor: '#f0f0f5' },
  abaContainer: { padding: 20, width: '100%', maxWidth: 600, alignSelf: 'center' },
  tituloSecao: { fontSize: 22, fontWeight: 'bold', color: '#c8102e', marginBottom: 20, textAlign: 'center' },
  cardPerfil: { backgroundColor: '#fff', padding: 20, borderRadius: 12, alignItems: 'center', elevation: 3 },
  avatarContainer: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center', marginBottom: 20, overflow: 'hidden', borderWidth: 2, borderColor: '#c8102e' },
  avatarImagem: { width: '100%', height: '100%' },
  avatarTexto: { color: '#666', fontWeight: 'bold' },
  label: { fontSize: 14, fontWeight: '600', color: '#555', marginBottom: 5, alignSelf: 'flex-start', width: '100%' },
  input: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 16, width: '100%', marginBottom: 20 },
  estatisticasPerfil: { alignItems: 'center', width: '100%' },
  inputDestaque: { fontSize: 30, fontWeight: 'bold', color: '#c8102e', backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, width: '50%' },
  
  // Estilos da Câmera
  containerCamera: { flex: 1, backgroundColor: '#000' },
  camera: { flex: 1, justifyContent: 'flex-end' },
  botoesCameraContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 30, backgroundColor: 'rgba(0,0,0,0.7)' },
  botaoCancelarCamera: { backgroundColor: '#555', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 8 },
  botaoCapturar: { backgroundColor: '#c8102e', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 8 },
  textoBotaoBranco: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});