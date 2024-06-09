import {
  BookOpenCheck,
  CalendarCheck2,
  CalendarPlus,
  UserRoundPlus,
  UsersRound,
} from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="h-full w-full bg-zinc-800 px-10 pt-4 ">
      <header>
        <p className="text-2xl text-white">VA BEAUTY</p>
      </header>
      <main>
        <nav className="ml-10 mt-14">
          <ul className="flex flex-col gap-2">
            <li className="">
              <Link
                href="#"
                className="flex gap-4 rounded-sm  bg-zinc-900 px-4 py-2 text-white "
              >
                <CalendarCheck2 strokeWidth={1.6} />
                <p className="font-bold">Minha agenda</p>
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="flex gap-4 rounded-sm  px-4 py-2 text-zinc-50/80 transition-all hover:bg-zinc-900 hover:font-bold hover:text-white "
              >
                <CalendarPlus strokeWidth={1.6} />
                <p>Criar Agendamento</p>
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="flex gap-4 rounded-sm  px-4 py-2 text-zinc-50/80 transition-all hover:bg-zinc-900 hover:font-bold hover:text-white "
              >
                <BookOpenCheck strokeWidth={1.6} />
                <p>Disponibilidade</p>
              </Link>
            </li>

            <li className="">
              <Link
                href="#"
                className="flex gap-4 rounded-sm  px-4 py-2 text-zinc-50/80 transition-all hover:bg-zinc-900 hover:font-bold hover:text-white "
              >
                <UsersRound strokeWidth={1.6} />
                <p>Meus Clientes</p>
              </Link>
            </li>
            <li className="">
              <Link
                href="#"
                className="flex gap-4 rounded-sm  px-4 py-2 text-zinc-50/80 transition-all hover:bg-zinc-900 hover:font-bold hover:text-white "
              >
                <UserRoundPlus strokeWidth={1.6} />
                <p>Criar usuário</p>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
