import React, { forwardRef, useRef } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { useForm, useController } from 'react-hook-form'

const Input = forwardRef(({ name, control, ...rest }, ref) => {
  const { field } = useController({
    control,
    name
  })

  return (
    <TextInput
      {...rest}
      ref={ref}
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={name}
    />
  )
})

function Transitions() {
  const { control, handleSubmit } = useForm()
  const ageInput = useRef()
  const buttonInput = useRef()

  const onSubmit = data => {
    Alert.alert('Form Submitted!', JSON.stringify(data), [{ text: 'OK' }])
  }

  return (
    <View style={styles.container}>
      <Input
        name="name"
        control={control}
        returnKeyType="next"
        onSubmitEditing={() => ageInput.current.focus()}
      />
      <Input
        ref={ageInput}
        name="age"
        control={control}
        returnKeyType="done"
        onSubmitEditing={() => buttonInput.current.props.onPress()}
      />
      <Button
        ref={buttonInput}
        title="submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue'
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1
  }
})

export default Transitions
