import Link from "next/link";
import api from "../api-services/data";

// getServerSideProps for SSR
async function fetchPosts() {
  try {
    const res = await api.get("/posts"); // API call

    return res.data;
  } catch (error) {
    // Handle network errors
    throw new Error("Failed to fetch users. Please try again later.");
  }
}

// UsersPage Component
const Posts = async ({ posts, error }) => {
  try {
    const posts = await fetchPosts();

    return (
      <>
        <h2 className="mb-4 font-bold">Post List</h2>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
};

export default Posts;
