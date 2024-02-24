import { useCartServiceStore } from "@/app/stores/cartServices"
import { ProgressIndicator } from "../components/ProgressIndicator"
import { Cart } from "./components/cart"
import { ServiceChoose } from "./components/service-choose"
import { AllServices } from "@/app/components/fetch-services"
import { StoreInitializer } from "@/app/stores/store.initializer"

export default async function ChooseService() {
  const { services } = await AllServices()

  useCartServiceStore.setState({ allServices: services })

  return (
    <>
      <StoreInitializer allServices={services} />
      <div className="h-full min-h-screen w-full bg-neutral-200">
        <div className="lg:max-w--[1216px] flex flex-col lg:mx-auto lg:px-[2rem] xl:max-w-[1256px] ">
          <div className=" sticky top-[4rem] z-10 mb-4 overflow-auto bg-neutral-200 lg:top-[5rem]  ">
            <ProgressIndicator currentStep={1}></ProgressIndicator>
          </div>

          <div className="gap-8 lg:grid lg:grid-cols-5 ">
            <div className="col-span-3">
              <header className=" sticky top-[7.5rem] z-10 flex flex-col gap-1  bg-neutral-200 px-[1.5rem] lg:top-[9rem] lg:px-0">
                <p className="lg:text-xl">Prendre un rendez-vous</p>
                <p className="">Chois de la prestation:</p>
                <div className=" h-4 w-full bg-neutral-200"></div>
              </header>

              <div className="mb-20 flex flex-col gap-14 lg:gap-4 ">
                <ServiceChoose category="forfaits" />
                <ServiceChoose category="sourcils" />
                <ServiceChoose category="levres" />
              </div>
            </div>

            <div className="relative top-[7rem] col-span-2 hidden h-full max-h-[400px]  bg-black lg:sticky lg:block">
              <Cart></Cart>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
