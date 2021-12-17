import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import BasicForm from './components/BasicForm'
import HookForm from './components/HookForm'
import HookValidationForm from './components/HookValidationForm'
import Transitions from './components/Transitions'

function Header({ title }) {
  return (
    <View style={{ marginVertical: 6, alignItems: 'center' }}>
      <Text style={{ textTransform: 'uppercase' }}>{title}</Text>
    </View>
  )
}

function App() {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <Header title="Basic" />
        <BasicForm />
        <Header title="Hook" />
        <HookForm />
        <Header title="Hook Validated" />
        <HookValidationForm />
        <Header title="Transitions" />
        <Transitions />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
