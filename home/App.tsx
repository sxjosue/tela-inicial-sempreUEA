import { StyleSheet, Text, View, Button } from 'react-native';
import {Feather} from "@expo/vector-icons";
import 'react-native-gesture-handler';
import * as React from 'react';
import Title from "./src/components/superior/index";
import Index from './src/components/routes';
import ScreenA from "./src/components/screens/screenA";
import ScreenB from "./src/components/screens/screenB";


interface informationProps {
  navigation: any,
  name: any
}

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Index/>
    </View>
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