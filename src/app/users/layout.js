import Link from "next/link";

const layout = async ({ children }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <h2 className="mb-4 font-bold">Users Layout</h2>
        <ul className="flex flex-col gap-2">
          {users.map((user) => (
            <li>
              <Link href={`/users/${user.id}`} key={user.id}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-8">{children}</div>
    </div>
  );
};

export default layout;
