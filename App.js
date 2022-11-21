import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Cadastro from './src/views/Cadastro';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar style="auto" />
      <Cadastro/>
    </SafeAreaView>
  );
}

