import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Commentflow() {
    const [comments, setComments] = useState([]); 
    const apiurl = "http://192.168.xx.xx:5075/api/getcomments"; 
    useEffect(() => {
        getComments();
    }, []);
    const getComments = async () => {
        try {
            const response = await fetch(apiurl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setComments(data);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };
    return (
        <ScrollView>
            {comments.length > 0 ? (
                comments.map((comment, i) => (
                    <Text style={styles.comment} key={i}>{comment.userComment}</Text>
                ))
            ) : (
                <Text style={styles.comment}>Inga kommentarer att visa</Text> 
            )}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    comment: {
        padding: 10,
        backgroundColor: '#f1f1f1',
        marginBottom: 10,
        color: '#ffff',
        backgroundColor: '#282c34',
        alignSelf: 'center',
        width: 300,
        borderRadius: 10,
        fontSize: 18,
        fontWeight: 'bold',
        elevation: 2,
        shadowColor: "#000",
        height: 100,
    }
});
