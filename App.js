import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import languages from './languages';
import styles from './styles';  // <-- Importing styles


import * as Speech from 'expo-speech';

export default function App() {

  const [textToSpeak, setTextToSpeak] = useState('');
  const [languageToSpeak, setLanguageToSpeak] = useState('en-US');

  const speak = () => {
    Speech.speak(textToSpeak, { language: languageToSpeak });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text to speak"
        onChangeText={text => setTextToSpeak(text)}
        value={textToSpeak}
      />

      <Picker
        selectedValue={languageToSpeak}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setLanguageToSpeak(itemValue)}
      >
        {languages.map((language, index) => (
          <Picker.Item key={index} label={language.name} value={language.code} />
        ))}
      </Picker>


      <Button title="Press to hear" onPress={speak} />
    </View>
  );
};