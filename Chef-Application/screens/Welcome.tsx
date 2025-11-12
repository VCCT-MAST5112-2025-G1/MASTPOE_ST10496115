import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/Styles';

export default function WelcomeScreen({ navigation }: any) {
    return (
        <LinearGradient colors={['#f9a825', '#ffcc80']} style={styles.container}>
            <Text style={styles.title}>🍽️ Welcome to ChefApp</Text>
            <Text style={styles.text}>Your kitchen companion!</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.buttonText}>View Menu</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}