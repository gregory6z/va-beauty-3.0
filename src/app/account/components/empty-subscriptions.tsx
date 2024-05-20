import { CircleFadingPlus } from "lucide-react"
import Link from "next/link"

export function EmptySubscriptions() {
  return (
    <article className="mt-12 flex flex-col items-center justify-center gap-4">
      <p className="text-pretty  text-zinc-900/60 lg:text-base">
        Vous n'avez pas encore des forfaits actifs.
      </p>

      <Link
        href={"/forfaits"}
        className=" flex items-center gap-2  px-5 py-2 font-semibold  "
      >
        Forfaits
        <CircleFadingPlus
          width={30}
          height={30}
          className="text-zinc-900"
        ></CircleFadingPlus>
      </Link>
      <p className=" text-pretty text-center text-lg text-zinc-900/60 lg:w-[60%] lg:text-base">
        Avec un de nos forfaits, vous pouvez toujours rester belle grâce à nos
        services de beauté de haute qualité, tout en profitant des prix les plus
        bas. Ne manquez pas cette opportunité de prendre soin de vous et de
        votre beauté.
      </p>
    </article>
  )
}
