/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchSubscriptions } from "@/app/api/fetch-subscriptions"
import Image from "next/image"
import { UnSubscribeButton } from "./unSubscribeButton"
import { EmptySubscriptions } from "./empty-subscriptions"

export interface Subscription {
  appointmentId: string
  services: string[]
  date: string
  time: string
}

export async function ForfaitCard() {
  const subscriptions = await FetchSubscriptions()

  return (
    <main className="mt-[20rem] flex h-full w-full flex-col rounded-sm border-t-[28px] border-zinc-300 border-t-zinc-900 bg-white p-6 pb-10 shadow-md lg:mx-auto lg:mt-40 lg:max-w-[1080px] lg:p-10   ">
      <header className="lg:max-w-[600px] ">
        <h1 className="text-2xl font-semibold lg:text-3xl">Mes Forfaits</h1>
        <p className="mx-auto mt-4  text-zinc-900/60 lg:text-lg ">
          Les forfaits sont définis automatiquement en fonction du choix du
          premier jour, mais peuvent être modifiés manuellement :
        </p>
      </header>
      {subscriptions.length === 0 && <EmptySubscriptions />}
      {subscriptions.map((subscription) => {
        return (
          <>
            <div className="" key={subscription.id}>
              <div className="flex items-center justify-between  pt-8  text-sm lg:pt-10">
                <p className="">
                  Status :{" "}
                  <span className="text-green-500">{subscription.status}</span>{" "}
                </p>

                <UnSubscribeButton
                  subscriptionId={subscription.id}
                  stripeId={subscription.product.id}
                />
              </div>

              {/* <div className="">Problema no pagamento</div> */}
              <div className="mx-auto flex  w-full flex-col gap-4  pt-6 lg:flex-row  lg:gap-10  ">
                <div className="mx-auto h-[240px] w-[240px] shrink bg-zinc-300 lg:mx-0">
                  <Image
                    src={""}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt={""}
                  ></Image>
                </div>
                <div className=" h-full w-full text-center  lg:mt-4  lg:h-[200px] lg:text-left">
                  <h1 className=" text-2xl font-semibold  lg:text-2xl">
                    {subscription.product.name}
                  </h1>
                  <p className=" mt-4 text-pretty text-left text-base text-zinc-900/60 lg:mt-2">
                    {subscription.product.description}
                  </p>
                  <p className="text:lg mt-4   ">Prochien rendez-vous: </p>

                  <p className="mt-4 text-xl font-semibold ">
                    Mardi 26/04/2023 à 14:00
                  </p>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </main>
  )
}
