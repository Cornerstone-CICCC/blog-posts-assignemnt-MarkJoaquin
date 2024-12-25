
import BlogPost from './BlogPost';
interface posts {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface BlogPostListProps {
    posts: posts[];
}

function BlogPostList( {posts}: BlogPostListProps) {
    return (
        <div className='blog-post-list'>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
}

export default BlogPostList;