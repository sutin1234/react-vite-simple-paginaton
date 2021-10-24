
const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>loading...</h2>;
    }

    return (
        <div>
            {posts.map((post: any) => (
                <li key={post.id} className="text-left text-sm text-blue-400 p-2 list-none">
                    {post.title}
                </li>
            ))}
        </div>
    )
}

export default Posts;