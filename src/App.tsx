import { useEffect, useState } from "react";
import BlogPostList from "./components/BlogPostList";
import "./styles/loader.css";
import "./styles/blogs.css";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <span className="loader">Loading</span>;
  }

  return (
    <>
      <main className="container">
        <h1 className="main-heading">Blog Posts</h1>
        <BlogPostList posts={posts} />
      </main>
    </>
  );
}

export default App;
