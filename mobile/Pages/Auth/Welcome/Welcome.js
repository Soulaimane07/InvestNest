import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  const [card, setCard] = useState(0); 
  
  const cards = [
    { image: require('../../../assets/images/box1.png'), title: 'Access prime real estate', description: 'browse our collection of global properties and funds, sourced by experts' },
    { image: require('../../../assets/images/box2.png'), title: 'Piece of the ones you love', description: 'buy shares in your favourite deals, no matter where you are in the world' },
    { image: require('../../../assets/images/box3.png'), title: 'Passive income  with no effort', description: 'earn consistent rental income from your brand new real estate portfolio' },
    { image: require('../../../assets/images/box4.png'), title: 'Tap into liquidity when you need it most', description: 'take early profits by selling within our community' },
  ]

  return (
    <View style={styles.container}>
      {cards.map((item, index) => (
        card === index && // Only render the card that matches the current index
          <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={item.image} // Adjust the path to your logo image
              style={styles.image} // Adjust the size as needed
            />
            <Text style={{ fontSize: 22, marginTop: 30, fontWeight: "bold", textAlign: "center" }}> {item.title} </Text>
            <Text style={{ fontSize: 15, opacity: 80, paddingHorizontal: 13, marginTop: 16, textAlign: "center" }}> {item.description} </Text>
          </View>
      ))}


      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => {
          if (card + 1 > cards.length-1) {
            navigation.navigate('Login'); // Navigate to the Login page
          } else {
            setCard(card + 1); // Move to the next card
          }
        }}
        activeOpacity={0.7} // Optional: Add a ripple effect on press
        title="Next"
      >
        <Text style={{ color: 'white', fontSize: 16 }}>
          {card + 1 > cards.length-1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  image: {
    width: 240, // Adjust the width as needed
    height: 240, // Adjust the height as needed
    borderRadius: 10, // Make it circular
  },
  buttonn: {
    backgroundColor: '#0FAC71', // Button color
    paddingVertical: 12,
    width: '90%', // Adjust the width as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 'auto'
  }
});