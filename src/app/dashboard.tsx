import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../componentes/Button';
import { useRouter } from 'expo-router'


export default function DashBoard() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Button title="voltar" onPress={() => router.back()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#FFFFF'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    }
})