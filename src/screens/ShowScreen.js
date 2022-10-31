import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogConext";
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {

    const id = navigation.getParam('id')

    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>Title : {blogPost.title}</Text>
            <Text>Content :  {blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={
                () => {

                    // console.log(navigation.getParam('id'))

                    navigation.navigate(
                        'Edit',
                        { id: navigation.getParam('id') }
                    )
                }

            }>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
        ),
    };

};

export default ShowScreen;