import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex h-screen w-screen    flex-col items-center justify-center bg-zinc-950 pb-20">
      <p className="z-[30]  text-3xl text-zinc-100 lg:text-center lg:text-4xl">
        VA BEAUTY
      </p>
      <Image
        src={"/spin.svg"}
        className="text-white"
        width={80}
        height={80}
        alt={"spin"}
      ></Image>
    </div>
  )
}
