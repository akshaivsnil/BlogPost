import React, { useContext , useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogConext";
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {

    const { state , deleteBlogPost , getBlogPost } = useContext(Context)

    useEffect( () => {

        getBlogPost();

        const listener  = navigation.addListener('didFocus' , () => {
            getBlogPost();
        });

        return() => {
            listener.remove();
        };


    },[]);

    const Item = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
            <View style={styles.itemStyle}>
                <Text style={styles.titleStyle}>{item.title}{"\n"}{item.content}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        return (
            <Item item={item} />
        );
    };

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={renderItem}
            />
        </View>
    );
};


IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
    };

};

const styles = StyleSheet.create({
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 24
    }

});

export default IndexScreen;