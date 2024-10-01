import React, { useEffect, useState } from 'react';
import ApiConfig from './ApiurlConfig';
import Style from './style/Comment.module.css'
import LikeButton from './Likebtn';
export default function Comment() {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [like, setLike] = useState(0);
    const [userId, setUserId] = useState(null);
    const apiUrl = ApiConfig();
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        setUserId(storedUserId);
    }, []);
    const CreateAnComment = async (e) => {
        e.preventDefault();
        if(!comment || comment.trim() === '') {
            setErrorMessage('Write something');
            return;
        }
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
            const userdata = await response.json();
            console.log(userdata);
            setCommentsList([...commentsList, { userComment: comment, likes: like }]);
            setComment('');
            setLike(0); 
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };
    return (
        <div className={Style.Container}>
            <form onSubmit={CreateAnComment} className={Style.Form_Container}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Skriv en kommentar..."
                className={Style.Input_Field}
                />
                <button type="submit">Submit</button>
            </form>
            <div className={Style.Old_Comment}>
                {commentsList.length > 0 ? (
                    commentsList.map((c, index) => (
                        <p key={index}>{c.userComment} (Likes: {c.likes})</p>
                    ))
                ) : (
                    <p >No comments yet.</p> 
                )}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <LikeButton like={like} setLike={setLike}/>
            </div>
        </div>
    );
}
