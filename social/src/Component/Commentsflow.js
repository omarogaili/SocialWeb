import React, { useCallback, useEffect, useState } from 'react';
import ApiConfig from './ApiurlConfig';
import style from './style/Comment.module.css'

export default function Comments() {
    let [comment, setcomment] = useState([]);
    let [isOld, setIsOld] = useState(false);
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
                <div key={index}>
                    <p>{comment.userComment}</p>
                </div>
            ))}
        </div>
        </>
        
    )
}


