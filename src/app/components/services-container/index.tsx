import { ServiceCard } from "./components/service-card"

export function ServicesContainer() {
  return (
    <div className="flex h-full w-full flex-col gap-8 pb-20 lg:mx-auto  xl:max-w-[1256px]">
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
    </div>
  )
}
