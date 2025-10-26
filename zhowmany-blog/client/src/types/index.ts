export type Post = {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
};

export type User = {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
};

export type Comment = {
    id: string;
    postId: string;
    author: string;
    content: string;
    createdAt: Date;
};