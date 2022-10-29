import UserInfo from "../components/UserInfo";
import TaskInfo from "../components/TaskInfo";
import {useState} from "react";

export default function HomePage() {
  const [time, setTime] = useState("daily");

  function handleClick(timeframe) {
    setTime(handleClick)
  }

  return(
    <div className="flex flex-col">
      <UserInfo time={time} handleClick={handleClick}/>
      <TaskInfo time={time}/>
    </div>
  )
}