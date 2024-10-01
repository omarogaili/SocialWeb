import React, { useCallback, useEffect, useState } from 'react';
import ApiConfig from './ApiurlConfig';
import style from './style/Commentflow.module.css'
import LikeButton from './Likebtn';

export default function Comments() {
    let [comment, setcomment] = useState([]);
    const [username, setUserName]= useState([]);
    let [isOld, setIsOld] = useState(false);
    const [like, setLike] = useState(0);
    const apiUrl = ApiConfig();
    const getComment =useCallback( async () => {
        try {
            const response = await fetch(apiUrl.apiurl_getcomments);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setcomment(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
    useEffect(() => {
        getComment();
    }, [apiUrl, isOld]);
    return (
        <>
        <div className={style.comment}>
            {comment.map((comment, index) => (
                <div key={index} className={style.commentItem}>
                    <p>{comment.userComment}</p>
                    <LikeButton like={comment.likes} setLike={setLike} id={comment._id}/>
                </div>
            ))}
        </div>
        </>
        
    )
}


