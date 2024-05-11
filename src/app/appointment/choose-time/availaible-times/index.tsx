"use client"

import { setCookie, parseCookies } from "nookies"
import { actionChecout } from "../action"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"

import { usePathname, useRouter } from "next/navigation"
import { ChangeDateAppointment } from "@/app/api/changeAppointmentDate"
import { toast } from "sonner"
// import { DialogClose } from "@/components/ui/dialog"

interface TimeSlot {
  time: string
  available: boolean
  day: Date
}

interface AvailableTimesProps {
  times: TimeSlot[]
}

export const AvailableTimes: React.FC<AvailableTimesProps> = ({ times }) => {
  const activeTimes = times.filter((slot) => slot.available)
  const pathname = usePathname()

  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const cookies = parseCookies()

  const appointmentId = cookies["@VaBeauty:appointmentId"]

  const handleTimeSlotClickandCheckOut = async (day: Date, time: string) => {
    const [hours, minutes] = time.split(":").map(Number)
    const newDate = new Date(day)

    newDate.setHours(hours)
    newDate.setMinutes(minutes)

    setCookie(null, "@VaBeauty:date", newDate.toISOString(), {
      maxAge: 30 * 24 * 60 * 60, // 30 dias de validade
      path: "/", // caminho raiz
    })

    if (pathname === "/appointment/choose-time") {
      startTransition(() => {
        actionChecout()
      })
    }

    if (pathname === "/account/appointments-history") {
      const asyncAction = async () => {
        startTransition(() => {
          ChangeDateAppointment({ appointmentId, date: newDate })
          setCookie(null, "dialogOpen", "false", {})
          toast.success("Date modifiée avec succès")
        })
      }

      asyncAction()
      router.refresh()
    }

    // if (pathname === "/account/appointments-history") {
    //   useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const result = await ChangeDateAppointment({
    //           date: new Date(changeDate),
    //           appointmentId,
    //         })
    //         setData(result)
    //       } catch (error) {
    //         console.error("Erro ao buscar dados:", error)
    //       }
    //     }

    //     fetchData()
    //   }, [changeDate, appointmentId])
    // }
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div>
        {activeTimes.map((slot, index) => (
          <Button
            disabled={isPending}
            key={index}
            onClick={() => handleTimeSlotClickandCheckOut(slot.day, slot.time)}
            className="m-2 w-full border border-gray-200 bg-zinc-200 py-2 text-base text-black hover:bg-black hover:text-white disabled:bg-zinc-300"
          >
            {slot.time}
          </Button>
        ))}
      </div>
    </div>
  )
}
