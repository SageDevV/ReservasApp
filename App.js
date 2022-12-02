import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Cadastro from './src/views/Cadastro';
import Login from './src/views/Login';
import CadastroDeReservas from './src/views/CadastroDeReservas';
import ReservasParaAprovacoes from './src/views/ReservasParaAprovacoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Cadastro} />
          <Stack.Screen name='Login' component={Login} /> 
          <Stack.Screen name='CadastroDeReservas' component={CadastroDeReservas} />
          <Stack.Screen name='ReservasParaAprovacoes' component={ReservasParaAprovacoes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

