import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { Styles } from './Styles/Styles';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [bottles, setBottles] = useState(0);
  const [weight, setWeight] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState('');

  function calculate() {
    
    let final_result = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let left = grams - (burning * hours)

    if (gender == 'male') {
      final_result = left / (weight * 0.7)
    }
    if (gender == 'female') {
      final_result = left / (weight * 0.6)
    }
    if (final_result <= 0) {
      final_result = 0
    }
    setResult(final_result.toFixed(2))
  }

  const checkTextInput = () => {
    if(!weight.trim()) {
      alert('Please enter weight!')
      setResult(0)
      return
    }
  }

  return (
    <ScrollView style={Styles.container} contentContainerStyle={Styles.scrollContent}>
      <View style={Styles.view}>
        <Text style={Styles.Title}>Alcometer</Text>

        <TextInput style={Styles.textinput}
        placeholder='Enter your weight'
        value={weight}
        maxLength={3}
        onChangeText={setWeight}
        keyboardType='numeric'></TextInput>

        <Text style={Styles.inputText}>Bottles</Text>

        <NumericInput style={Styles.NumericInput} value={bottles}
        onChange={b => setBottles(b)}
        minValue={0}></NumericInput>

        <Text style={Styles.inputText}>Hours</Text>

        <NumericInput style={Styles.NumericInput} value={hours}
        onChange={h => setHours(h)}
        minValue={0}></NumericInput>

        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>

        <View style={Styles.radioStyle}>
        <RadioButton value="male"/>

        <Text style={Styles.RadioText}>Male</Text>
        </View>

        <View style={Styles.radioStyle}>
        <RadioButton value="female"/>

        <Text style={Styles.RadioText}>Female</Text>
        </View>

        </RadioButton.Group>

        <Text style={Styles.Output}>{result}</Text>

        <Button style={Styles.button} mode='contained' title='Calculate' onPress={ () => {calculate(); checkTextInput(); }}></Button>

      </View>
    </ScrollView>
  );
}