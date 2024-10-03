import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; 
export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const apiUrl = "http://192.168.1.99:5075/api/login";
    const postData = async () => {
        setErrorMessage('');
        if (!email || email.trim() === '') {
            setErrorMessage('Email is required.');
            return;
        }
        if (!password || password.trim() === '') {
            setErrorMessage('Password is required.');
            return;
        }
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userEmail: email,
                    userPassword: password,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.userId !== undefined) {
                await AsyncStorage.setItem('userId', String(data.userId));
                await AsyncStorage.setItem('userName', data.userName);
                navigation.navigate('VibeNest', { userId: data.userId, userName: data.userName });
            } else if (!data.success) {
                setErrorMessage(data.message);
            }
        } catch (e) {
            console.error('Error:', e);
            setErrorMessage('An error occurred. Please try again.');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.legend}>VibeNest</Text>
            <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
                keyboardType="email-address"
                style={styles.input}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput 
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry={true} 
                style={styles.input}
            />
            <Button title="Login" onPress={postData} />
            {errorMessage && <Text style={styles.label}>{errorMessage}</Text>}
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    legend: {
        fontSize: 24,
        marginBottom: 16,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        borderWidth: 1,
        width: 300,
        borderColor: '#ccc',
        borderRadius: 9,
        padding: 16,
        margin: 20,
        elevation: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        maxHeight: 400,
        backgroundColor: '#3b424e',
        zIndex:2,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 16,
        height: 40,
        backgroundColor: '#fff',
        zIndex:1
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        color: '#fff',
    },
});
