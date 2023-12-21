import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";



type bookSearchProps = {
    handleSearch: (searchBook: string) => void;
}

const BookSearch: FC<bookSearchProps> = ({ handleSearch: handleSearch }) => {
    return (
        
        < TextInput style={styles.search}
            placeholder="Search Any Book " onChangeText={(searchBook) => {
            handleSearch(searchBook);
        }
    
        } />
    );
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    }
});


export default BookSearch;