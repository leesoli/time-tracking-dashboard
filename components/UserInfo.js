import Image from "next/image";

export default function UserInfo({time, handleClick}) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image
          src="/images/image-jeremy.png"
          alt="Photo of user"
          width={100}
          height={100}
        />
      </div>
      <div> Report for Jeremy Robson</div>
      <div>
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  )
}