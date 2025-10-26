export class PostsController {
    private posts: Array<{ id: number; title: string; content: string }> = [];
    private nextId: number = 1;

    public getAllPosts(req: any, res: any): void {
        res.json(this.posts);
    }

    public getPostById(req: any, res: any): void {
        const postId = parseInt(req.params.id, 10);
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('Post not found');
        }
    }

    public createPost(req: any, res: any): void {
        const newPost = {
            id: this.nextId++,
            title: req.body.title,
            content: req.body.content
        };
        this.posts.push(newPost);
        res.status(201).json(newPost);
    }

    public updatePost(req: any, res: any): void {
        const postId = parseInt(req.params.id, 10);
        const postIndex = this.posts.findIndex(p => p.id === postId);
        if (postIndex !== -1) {
            this.posts[postIndex] = {
                id: postId,
                title: req.body.title,
                content: req.body.content
            };
            res.json(this.posts[postIndex]);
        } else {
            res.status(404).send('Post not found');
        }
    }

    public deletePost(req: any, res: any): void {
        const postId = parseInt(req.params.id, 10);
        const postIndex = this.posts.findIndex(p => p.id === postId);
        if (postIndex !== -1) {
            this.posts.splice(postIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).send('Post not found');
        }
    }
}