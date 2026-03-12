import { useEffect, useState } from "react";
import BasicUserList from "./components/BasicUserList";
import withLoading from "./hocs/withLoading";
import withEnhancements from "./hocs/withEnhancements";
import MouseTracker from "./components/MouseTracker";
import { useMouse } from "./hooks/useMouse";
import withLogging from "./hocs/withLogging";
import MousePositionCard from "./components/MousePositionCard";

const UserList = withLogging(withLoading(BasicUserList));
const UserListEnhanced = withEnhancements(BasicUserList);

export default function App() {
  const users: { id: number; name: string }[] = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Tom" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const { x, y } = useMouse();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen w-screen p-8 flex flex-col gap-4 items-center justify-start">
      <UserList isLoading={isLoading} users={users} />
      <UserListEnhanced isLoading={isLoading} users={users} />
      <MouseTracker render={MousePositionCard} />
      <MousePositionCard x={x} y={y} />
    </div>
  );
}
