import api from "../api-services/data";
import Link from "next/link";

async function fetchUsers() {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (e) {
    throw new Error("Failed to fetch users. Please try again later.");
  }
}

const layout = async ({ children }) => {
  const users = await fetchUsers();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <h2 className="mb-4 font-bold">Users Layout</h2>
        <ul className="flex flex-col gap-2">
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-8">{children}</div>
    </div>
  );
};

export default layout;
