import { View, Text } from 'react-native'
import React from 'react'

const Favorites = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text>Favorites</Text>
    </View>
  );
};

Favorites.navigationOptions = {
  title: 'Favorites'
};

export default Favorites