import { FormEditProfil, FormEditProps } from "./form-edit-profil"
import { FormEditPassword } from "./form-edit-password"
import { cookies } from "next/headers"

export default async function EditProfil() {
  const session = cookies().get("@VaBeauty:session")?.value

  const sessionObject: FormEditProps = JSON.parse(session as string)

  let name, email, telephone

  if (sessionObject) {
    name = sessionObject.name
    email = sessionObject.email
    telephone = sessionObject.telephone
  }

  return (
    <div className="flex w-full flex-col items-center gap-2 bg-zinc-300 lg:gap-10   lg:py-[6rem]">
      <div className="w-full bg-zinc-100 p-6 py-20 lg:max-w-[600px] lg:p-10">
        <h1 className="text-xl font-bold lg:text-3xl">
          Mettez à jour vos informations:{" "}
        </h1>
        <FormEditProfil name={name} email={email} telephone={telephone} />
      </div>
      <div className="mx-10  w-full   bg-zinc-100 p-6 py-20 lg:max-w-[600px] lg:p-10">
        <h1 className="text-xl font-bold lg:text-3xl">Changer mot de passe </h1>

        <FormEditPassword />
      </div>
    </div>
  )
}
