import React, { useEffect, useState } from 'react';
import ApiConfig from './ApiurlConfig';
export default function Comment() {
    let [comment, setComment] = useState([]);
    let [isOld, setIsOld] = useState(false);
    const [like, setLike] = useState(0);
    const [userId, setUserId] = useState(null);
    const apiUrl = ApiConfig();
    useEffect (()=>{
        const storedUserId =localStorage.getItem('userId');
        setUserId(storedUserId);
    },[]);
    const CreateAnComment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiUrl.apiurl_comments, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userComment: comment,
                    likes: like,
                    userId: userId,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setComment(data.Comment);
            setLike(data.Like);
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    }
    return(
        <div>
            <form onSubmit={CreateAnComment}>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>Likes: {like}</h3>
                <button onClick={() => setLike(like + 1)}>Like</button>
            </div>
        </div>
    );
}