import UserInfo from "../components/UserInfo";
import TaskInfo from "../components/TaskInfo";
import {useState} from "react";

export default function HomePage() {
  const [time, setTime] = useState("daily");

  function handleClick(timeframe) {
    setTime(handleClick)
  }

  return(
    <div className="flex flex-col bg-[#0f1424] h-screen py-12 items-center">
      <UserInfo time={time} handleClick={handleClick}/>
      <TaskInfo time={time}/>
    </div>
  )
}