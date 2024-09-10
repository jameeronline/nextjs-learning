import api from "../api-services/data";

async function fetchTodos() {
  try {
    const res = await api.get("/todos");

    return res.data;
  } catch (e) {
    throw new Error("404: todos fetching failed.");
  }
}
const Page = async () => {
  const todos = await fetchTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Page;
