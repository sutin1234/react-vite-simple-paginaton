import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res: any = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();

  }, [])

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1 className="text-red-600">My Posts</h1>
      <div>
        <Posts posts={currentPost} loading={loading} />
        <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
      </div>
    </div>
  )

}

export default App
