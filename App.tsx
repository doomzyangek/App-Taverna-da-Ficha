import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Ficha from './src/telas/Ficha';
import Sessao from './src/telas/Sessao';
import Perfil from './src/telas/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Deixa a barra do celular com ícones brancos para combinar com o tema Dark */}
      <StatusBar style="light" /> 
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Some com a barra superior vermelha
          tabBarIcon: ({ color, size }) => {
            let iconName: any;
            if (route.name === 'Ficha') iconName = 'document-text';
            else if (route.name === 'Sessão') iconName = 'book';
            else if (route.name === 'Perfil') iconName = 'person';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: '#1a1a1a', // Fundo principal do seu CSS
            borderTopColor: '#3dbd70', // Linha verde superior
            borderTopWidth: 2,
            height: 60,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: '#bbff00', // Cor do ícone clicado (Amarelo Neon)
          tabBarInactiveTintColor: '#287e55', // Cor do ícone inativo (Verde Musgo)
          tabBarShowLabel: false, // Esconde os textos para deixar só o ícone estiloso
        })}
      >
        <Tab.Screen name="Ficha" component={Ficha} />
        <Tab.Screen name="Sessão" component={Sessao} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}