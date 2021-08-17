import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Item = ({title, onDelete, id}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, id)}>
            <View style={styles.listContainer}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        padding:10,
        marginVertical:10,
        backgroundColor:'teal'
    }
})

export default Item;
