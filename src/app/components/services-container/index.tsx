import { ServiceCard } from "./components/service-card"

export function ServicesContainer() {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-[1rem] sm:mx-auto sm:max-w-[600px] lg:mx-auto lg:max-w-[1216px] lg:gap-8 lg:px-[0] lg:pb-20  xl:max-w-[1256px]">
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
    </div>
  )
}
