import React from 'react';
import { Text, View, Button, Image, Platform } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&w=1000&q=80',
        }}
        style={[
          {resizeMode: 'contain', width: '100%', paddingTop: '66.66%'},
          Platform.OS === 'ios' ? {resizeMode: 'cover'} : {}
        ]}
      />
      <Button
        title="Go To Detail" 
        onPress={() => navigation.navigate('Detail', { id: 1 })}  
      />
    </View>
  )
}

export default Home