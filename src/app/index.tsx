import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Button } from '../componentes/Button';
import { Input } from '../componentes/input';
import { useRouter } from 'expo-router'; 

export default function Page() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Olá, {name}!</Text>
        <Text style={styles.subtitle}>Construindo coisa interessantes com React Native.</Text>
        <Input placeholder='Digite o seu nome' onChangeText={setName} />
        <Button 
          title="Entrar"
          onPress={() => {
            if (name.trim() !== '') {
              router.push('/dashboard');
            } else {
              alert('Por favor, digite o seu nome!');
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#67159C",
  },
});
