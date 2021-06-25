import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>React Native</Text>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        Maick Souza
      </Text>
    </>
  );
}
