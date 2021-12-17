import React from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { useForm, useController } from 'react-hook-form'

function Input({ name, control, rules, ...rest }) {
  const { field, fieldState } = useController({
    control,
    name,
    rules
  })

  return (
    <TextInput
      {...rest}
      style={[styles.input, fieldState.error && { borderColor: 'red' }]}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={name}
    />
  )
}

function HookValidationForm() {
  const { control, handleSubmit } = useForm()

  const onSubmit = data => {
    Alert.alert('Form Submitted!', JSON.stringify(data), [{ text: 'OK' }])
  }

  return (
    <View style={styles.container}>
      <Input name="name" control={control} rules={{ required: true }} />
      <Input
        keyboardType="numeric"
        name="age"
        control={control}
        rules={{ required: true, validate: value => value >= 18 }}
      />
      <Button title="submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'mintcream'
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})

export default HookValidationForm
