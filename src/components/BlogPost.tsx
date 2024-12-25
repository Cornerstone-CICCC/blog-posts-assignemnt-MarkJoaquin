interface post {
        id: number;
        title: string;
        body: string;
        userId: number;
    }
    
    function BlogPost({ post }: { post: post }) {
        return (
            <article className="blog-post">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-body">{post.body}</p>
                <p className="blog-post-author">Author ID: {post.userId}</p>
            </article>
        );
    }

    export default BlogPost;