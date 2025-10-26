import React from 'react';

const Post: React.FC<{ title: string; content: string }> = ({ title, content }) => {
    return (
        <div className="post">
            <h1>{title}</h1>
            <div className="post-content">{content}</div>
        </div>
    );
};

export default Post;