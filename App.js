import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Pinoy Health Buddy</Text>
      </View>

      <ImageBackground
        source={{
          uri: 'https://www.heart.org/en/-/media/Images/Healthy-Living/Healthy-Eating/NutritionBasicshome.jpg?sc_lang=en',
        }}
        style={styles.imageBackground}
      >
        <View style={styles.content}>
      
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
            }}
            style={styles.iconImage}
          />

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#777"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#777"
            secureTextEntry
          />
         
      
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  navbar: {
    backgroundColor: 'green',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: '10%',
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    padding: 25,
    width: '80%', 
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 40, 
    paddingRight: 40,
  },
  iconImage: {
    width: 70,
    height: 70,
    marginBottom: 10, 
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
