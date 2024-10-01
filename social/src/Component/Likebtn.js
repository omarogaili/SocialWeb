import React from "react";

const LikeButton = ({ like, setLike }) => {
    const handleLike = () => {
        setLike((prevLikes) => prevLikes + 1);
    };
    return (
        <div>
            <h3>Likes: {like}</h3>
            <button onClick={() => setLike(like + 1)}>Like</button>
        </div>
    );
};

export default LikeButton;
