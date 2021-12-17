import React from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { useForm, useController } from 'react-hook-form'

function Input({ name, control, ...rest }) {
  const { field } = useController({
    control,
    name
  })

  return (
    <TextInput
      {...rest}
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={name}
    />
  )
}

function HookForm() {
  const { control, handleSubmit } = useForm()

  const onSubmit = data => {
    Alert.alert('Form Submitted!', JSON.stringify(data), [{ text: 'OK' }])
  }

  return (
    <View style={styles.container}>
      <Input name="name" control={control} />
      <Input name="age" control={control} keyboardType="numeric" />
      <Button title="submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke'
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})

export default HookForm
