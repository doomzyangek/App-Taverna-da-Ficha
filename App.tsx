import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- IMPORTANTE PARA A WEB

// Importação das Telas separadas
import Ficha from './src/telas/Ficha';
import Sessao from './src/telas/Sessao';
import Perfil from './src/telas/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>  {/* <-- ENVOLVENDO O APP PARA EVITAR TELA BRANCA */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'help';

              if (route.name === 'Ficha 3D&T') {
                iconName = focused ? 'document-text' : 'document-text-outline';
              } else if (route.name === 'Sessão Atual') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Perfil') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#c8102e',
            tabBarInactiveTintColor: 'gray',
            headerShown: true, 
            headerStyle: { backgroundColor: '#c8102e' },
            headerTintColor: '#fff',
          })}
        >
          <Tab.Screen name="Ficha 3D&T" component={Ficha} />
          <Tab.Screen name="Sessão Atual" component={Sessao} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}