import BackBtn from "./backBtn";

const Page = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`,
  );
  const user = await res.json();
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <BackBtn />
    </div>
  );
};

export default Page;
