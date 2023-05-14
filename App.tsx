import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {


  async function playMusic() {
    console.log("pressed")
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./Vent.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View >
      <Text>Open  cloud</Text>
      <Text>Open  cloud</Text>
      <Text>Open  cloud</Text>
      <Text>Open  cloud</Text>
      <TouchableOpacity onPress={playMusic}><Text>the button</Text></TouchableOpacity>
    </View>
  );
}