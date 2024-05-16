import Image from "next/image"
import Link from "next/link"
import { ForgotPasswordForm } from "./components/forgot-password-form"

export default async function ForgotPassword() {
  return (
    <div className=" flex h-full min-h-[calc(100vh-4rem)] overflow-hidden bg-white px-[1.5rem] lg:grid lg:h-[calc(100vh-5rem)] lg:min-h-0 lg:grid-cols-2 lg:px-0 ">
      <div className=" hidden w-full bg-black lg:block">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Image
            alt="facebook.icon"
            width={800}
            height={300}
            src="/forfaits-1.png"
          ></Image>
          <p className="mt-20 text-center text-6xl text-white">VA BEAUTY</p>
        </div>
      </div>
      <div className=" w-full">
        <div className="flex h-full w-full items-center   lg:max-w-[calc(1216px/2)] xl:max-w-[calc(1256px/2)]">
          <div className=" lg:mx-auto lg:px-16">
            <div className="mb-10 flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">Mot de passe oublies</h1>
              <p className="text-pretty text-zinc-900/60">
                Entrez votre adresse e-mail ci-dessous.
              </p>
            </div>

            <ForgotPasswordForm></ForgotPasswordForm>

            <Link
              href={"/sign-out"}
              className="hover:text-zinc-600 hover:underline"
            >
              <p className="mt-8 text-balance text-center text-sm text-zinc-900/80">
                Vous n'avez pas de compte ? Cliquez ici pour en créer un.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
