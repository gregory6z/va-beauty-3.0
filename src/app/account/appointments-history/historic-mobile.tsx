import { Appointment } from "@/app/api/fetch-appointments"

import { add, format, isBefore } from "date-fns"
import { fr } from "date-fns/locale"

interface HistoricMobileProps {
  appointments: Appointment[]
  children: React.ReactNode
}

export function HistoricMobile({
  appointments,
  children,
}: HistoricMobileProps) {
  const formatDate = (date: Date) => {
    return format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: fr })
  }

  return (
    <div className="flex h-full w-full flex-col gap-4 bg-white px-[1.5rem]  py-[2rem]">
      {appointments.map((appointment: Appointment, index) => {
        return (
          <div
            key={appointment.id}
            className={`flex  flex-col ${index < appointments.length - 1 ? "border-b border-zinc-700/60" : ""} pb-8`}
          >
            <p className="text-bold mt-2 text-sm text-gray-900/60 ">
              Services:
            </p>
            <div className="flex items-center justify-between ">
              <div className=" w-full ">
                {appointment.services.map((service, index) => (
                  <div key={service}>
                    <span className="text-xl font-semibold">{service}</span>

                    {index < appointment.services.length - 1 && (
                      <span style={{ margin: "0 10px" }}>•</span>
                    )}
                  </div>
                ))}
                <p className="text-sm ">
                  duration : {appointment.duration} minutes
                </p>
                <p className="text-bold mt-2 text-sm text-gray-900/60 ">
                  Date:
                </p>

                <p className="w-full text-xl">
                  {formatDate(appointment.dateTime)}
                </p>

                {isBefore(
                  new Date(appointment.dateTime),
                  add(new Date(), { days: 1 }),
                ) ? (
                  <></>
                ) : (
                  <div className="mt-4 w-full ">{children}</div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
