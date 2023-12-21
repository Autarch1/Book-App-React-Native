import React, { Component, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { books } from './hooks/books';
import BookSearch from './components/BookSearch';
const BookListScreen = () => {
  const { data } = books();
    const [filterBook, setFilterBook] = useState(data);


   const handleSearch = (searchBook: string) => {
const filteredBook = data?.filter((book) => book.title.toLowerCase().includes(searchBook.toLowerCase()));
     
         setFilterBook(filteredBook);
    }

  return (
    <>
      <BookSearch handleSearch={handleSearch}/>
    <View>
      <FlatList
        data={filterBook}
        renderItem={({ item }) => (
          <View
            style={{
              gap: 10,
              borderColor: 'black',
              padding: 10,
              margin: 10,
              borderRadius: 10,
              backgroundColor : 'white',
            }}
          >
            <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={styles.title}>Title: {item.title}</Text>
            </View>
            
          <TouchableOpacity onPress={() => console.log('Pressed!')}>
              <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={ require('@/assets/img/The-Hobbit.jpg') }
                  onError={(error) => console.error('Image loading error:', error)}
                  
          />
                </View>
          </TouchableOpacity> 

              {/* <Image source={asset(`src/assets/img/${item.image}`)} /> */}
            <View style={{
                
              }}>
              <Text style={styles.text}>Author : {item.author}</Text>
                <Text style={styles.text}>Description : {item.description}</Text>
             
              <Text style={styles.text}>Price : {item.price}$</Text>
              </View>
          </View>
          
        )}
        keyExtractor={item => item.id}
      />
      </View>

      </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 12,
  },

  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default BookListScreen;
