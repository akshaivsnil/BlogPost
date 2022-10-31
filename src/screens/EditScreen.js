import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogConext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id')

    const { state, updateBlogPost } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === id)


    return (
        <BlogPostForm
            initValues={{ title: blogPost.title, content: blogPost.content }}
            label = 'Edit'
            onSubmit={(title, content) => {
                updateBlogPost(
                    id,
                    title,
                    content,
                    () =>  navigation.navigate('Show')
                )
            }}
        />
    );
};



export default EditScreen;