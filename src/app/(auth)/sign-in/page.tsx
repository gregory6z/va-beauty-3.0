import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SignInForm } from "./components/sign-in-form"
import Link from "next/link"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function SignIn() {
  const AuthenticateToken = cookies().get("@VaBeauty:token")

  if (AuthenticateToken) {
    redirect("/")
  }

  return (
    <div className=" flex h-full min-h-[calc(100vh-4rem)] overflow-hidden px-[1.5rem] lg:grid lg:h-[calc(100vh-5rem)] lg:min-h-0 lg:grid-cols-2 lg:px-0 ">
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
              <h1 className="text-3xl font-semibold">Connexion</h1>
              <p className="text-pretty text-zinc-900/60">
                Entrez votre adresse e-mail ci-dessous pour se connecter.
              </p>
            </div>
            <SignInForm />
            <div>
              <div></div>
              <p className="mt-8 text-center text-xs text-zinc-900/60">
                OU CONTINUER AVEC
              </p>
              <div></div>
            </div>
            <div className="mt-2 flex w-full items-center justify-center gap-4  ">
              <Button variant={"outline"} className="h-16 w-16">
                <Image
                  alt="facebook.icon"
                  width={48}
                  height={48}
                  src="/facebook.svg"
                ></Image>
              </Button>
              <Button variant={"outline"} className="h-16 w-16">
                <Image
                  alt="Google.icon"
                  width={48}
                  height={48}
                  src="/google.svg"
                ></Image>
              </Button>
              <Button variant={"outline"} className="h-16 w-16">
                <Image
                  alt="Apple.icon"
                  width={48}
                  height={48}
                  src="/apple.svg"
                ></Image>
              </Button>
            </div>

            <p className="mt-8 text-balance text-center text-sm text-zinc-900/80">
              En cliquant sur Continuer, vous acceptez nos{" "}
              <span className=" underline "> Conditions d'utilisation </span>et
              notre{" "}
              <span className=" underline ">Politique de confidentialité</span>
            </p>
            <Link href={"/sign-out"} className="">
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
