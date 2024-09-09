import api from "@/app/api-services/data";

// getServerSideProps for SSR
async function fetchPost(id) {
  try {
    const res = await api.get(`/posts/${id}`); // API call
    return res.data;
  } catch (error) {
    // Handle network errors
    throw new Error(
      "Failed to fetch post. Please try again later." + error.message,
    );
  }
}

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const { postId } = params;
  const post = await fetchPost(postId);

  return {
    title: `${post.title} - Profile`,
    description: `Learn more about ${post.title}, a valued member of our community.`,
    openGraph: {
      title: `${post.title} - Profile`,
      description: `Check out ${post.title}'s profile`,
      url: `https://yourwebsite.com/users/${post.id}`,
    },
  };
}

const page = async ({ params }) => {
  const { postId } = params;
  const post = await fetchPost(postId);
  return (
    <>
      <div>
        <h1 className="mb-10 text-5xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default page;
