import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import Title from "./src/components/superior/index";
import Routes from './src/components/routes';

export default function App() {
  return (
    <>
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 