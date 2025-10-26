import React from 'react';

interface PostCardProps {
    title: string;
    excerpt: string;
    date: string;
    author: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, date, author }) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <small>
                Posted on {date} by {author}
            </small>
        </div>
    );
};

export default PostCard;