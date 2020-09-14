import React from 'react';
import { Text, View, } from 'react-native';

const Detail = ({ route }) => {
  const { id } = route.params
  return (
    <View>
      <Text>Detail</Text>
      <Text>{`This is param form home ${id}`}</Text>
    </View>
  )
}

export default Detail