import { ProgressIndicator } from "../components/ProgressIndicator"
import { ServiceChoose } from "./components/service-choose"

export default function ChooseService() {
  return (
    <div className="h-full min-h-screen w-full bg-neutral-200">
      <div className="flex flex-col xl:mx-auto xl:max-w-[1256px]">
        <div className=" sticky top-[3rem] z-10 mb-4 overflow-auto bg-neutral-200  ">
          <ProgressIndicator currentStep={1}></ProgressIndicator>
        </div>

        <div className="grid grid-cols-5 gap-8 lg:mt-4">
          <div className="col-span-3">
            <header className=" sticky top-[6rem] z-10  flex flex-col gap-1 bg-neutral-200">
              <p className="lg:text-xl">Prendre un rendez-vous</p>
              <p className="">Chois de la prestation:</p>
              <div className=" h-4 w-full bg-neutral-200"></div>
            </header>
            <div className="mb-20 flex flex-col gap-4">
              <ServiceChoose category="Forfait" />
              <ServiceChoose category="Sourcils" />
              <ServiceChoose category="Lévres" />
            </div>
          </div>

          <div className=" sticky top-[7rem] col-span-2 max-h-[500px] overflow-auto bg-neutral-500">
            {" "}
            item de carrinho
          </div>
        </div>
      </div>
    </div>
  )
}
