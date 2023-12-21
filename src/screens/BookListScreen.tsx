import React, { Component } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { books } from './hooks/books';
import asset from 'react-native-asset';
const BookListScreen = () => {
  const { data } = books();

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log('Pressed!')}>
            <View>
              <Text>Title: {item.title}</Text>
              
              <Image
                source={require(`src/assets/img/${item.image}`)} // Dynamically construct path here
                onError={(e) => console.error('Image failed to load:', e)}
               onLoad={() => console.log('Image loaded!' + item.image)}

              />
              {/* <Image source={asset(`src/assets/img/${item.image}`)} /> */}

              <Text>Author: {item.author}</Text>
              <View>
                <Text>Description: {item.description}</Text>
              </View>
              <Text>Price: {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BookListScreen;
