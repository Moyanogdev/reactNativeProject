import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import {COLORS} from '../constants/colors'
import { useDispatch } from 'react-redux'
import { signup } from '../store/actions/auth.action'

const AuthScreen = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        dispatch(signup(email, password))
    }

  return (
    <KeyboardAvoidingView behavior='height' style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <Text>Email</Text>
            <TextInput keyboardType='email-address' autoCapitalize='none' value={email} onChangeText={setEmail}/>
            <Text>Password</Text>
            <TextInput secureTextEntry autoCapitalize='none' value={password} onChangeText={setPassword}/>
            <Button title='Sign Up' onPress={handleSignUp}/>
            <View style={styles.prompt}>
                <Text style={styles.promptMessage}>Do you already have an account?</Text>
                <TouchableOpacity onPress={() => console.log('ingresar')}>
                    <Text style={styles.promptButton}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>

  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20
    },
})