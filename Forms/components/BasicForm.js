import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

function BasicForm() {
  const [text, setText] = useState(null)
  const [age, setAge] = useState(null)

  const submitHandler = () => {
    Alert.alert('Form Submitted!', `text: ${text} & age: ${age}`, [
      { text: 'OK' }
    ])
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="name"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setAge}
        value={age}
        placeholder="age"
        keyboardType="numeric"
      />
      <Button title="submit" onPress={submitHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})

export default BasicForm
