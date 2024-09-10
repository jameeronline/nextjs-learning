import api from "@/app/api-services/data";

import BackBtn from "./backBtn";

async function fetchUserDetails(id) {
  try {
    const res = await api.get(`/users/${id}`);
    return res.data;
  } catch (e) {
    throw new Error("Failed to fetch users. Please try again later.");
  }
}

const Page = async ({ params }) => {
  const user = await fetchUserDetails(params.userId);
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <BackBtn />
    </div>
  );
};

export default Page;
