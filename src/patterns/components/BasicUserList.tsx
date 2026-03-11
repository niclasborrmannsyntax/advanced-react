export default function BasicUserList({
  users,
}: {
  users: { id: number; name: string }[];
}) {
  return (
    <ul className="bg-white max-w-sm rounded-2xl shadow p-4 text-black font-bold">
      {users.map((u) => (
        <li key={u.id}>
          {u.id}.{u.name}
        </li>
      ))}
    </ul>
  );
}
