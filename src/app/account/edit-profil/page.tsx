import { FormEditProfil } from "./form-edit-profil"
import { FormEditPassword } from "./form-edit-password"

export default async function EditProfil() {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-zinc-300 lg:gap-10   lg:py-[6rem]">
      <div className="w-full rounded-sm bg-zinc-100 p-6 py-20 lg:max-w-[600px] lg:p-10">
        <h1 className="text-xl font-bold lg:text-3xl">
          Mettez à jour vos informations:{" "}
        </h1>
        <FormEditProfil />
      </div>
      <div className="mx-10 w-full rounded-sm   bg-zinc-100 p-6 py-20 lg:max-w-[600px] lg:p-10">
        <h1 className="text-xl font-bold lg:text-3xl">Changer mot de passe </h1>

        <FormEditPassword />
      </div>
    </div>
  )
}
