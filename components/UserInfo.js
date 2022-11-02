import Image from "next/image";

export default function UserInfo({time, handleClick}) {
  return (
    <div className="flex text-[#bdc1ff] text-lg flex-col w-[90%] bg-[#1c1f4a] rounded-xl">
      <div className="flex bg-[#5847eb] rounded-xl py-10 justify-evenly">
        <div className="relative bg-inherit border-white border-4 rounded-full">
          <Image
            src="/images/image-jeremy.png"
            alt="Photo of user"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col justify-center w-[60%]">
          <div>Report for</div>
          <div className="text-2xl">Jeremy Robson</div>
        </div>
      </div>
      <div className="text-[#6f76c8] flex justify-around py-6">
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  )
}