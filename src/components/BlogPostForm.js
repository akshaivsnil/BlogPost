import React, { useContext , useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogConext";


const BlogPostForm = ({ onSubmit , initValues ,label }) => {

    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);

    return (
        <View>
            <Text style={styles.labelStyle} >Enter Title :  </Text>
            <TextInput style={styles.inputStyle}
                value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.labelStyle} >Enter Content : </Text>
            <TextInput style={styles.inputStyle}
                value={content} onChangeText={text => setContent(text)} />

            <Button title={label +" blog post"}
                onPress={() => { onSubmit(title,content) }}
            />
        </View>
    );

};

BlogPostForm.defaultProps = {
    initValues : {
        title : '',
        content : ''
    },
    label : 'Add'
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 6,
        padding: 6
    },
    labelStyle: {
        fontSize: 20,
        margin: 6
    }
});

export default BlogPostForm;