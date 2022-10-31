import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogConext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context)

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlogPost(
                    title,
                    content,
                    () => navigation.pop())
            }} />
    );
};

const styles = StyleSheet.create({

});

export default CreateScreen;