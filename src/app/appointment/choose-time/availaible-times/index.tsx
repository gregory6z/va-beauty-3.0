"use client"

import { setCookie } from "nookies"
import { actionChecout } from "../action"
import { Button } from "@/components/ui/button"

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

  const handleTimeSlotClickandCheckOut = async (day: Date, time: string) => {
    const [hours, minutes] = time.split(":").map(Number)
    const newDate = new Date(day)
    newDate.setHours(hours)
    newDate.setMinutes(minutes)

    setCookie(null, "@VaBeauty:date", newDate.toISOString(), {
      maxAge: 30 * 24 * 60 * 60, // 30 dias de validade
      path: "/", // caminho raiz
    })

    await actionChecout()
  }

  return (
    <div className="flex flex-wrap justify-center">
      {activeTimes.map((slot, index) => (
        <Button
          key={index}
          onClick={() => handleTimeSlotClickandCheckOut(slot.day, slot.time)}
          className="m-2 w-full border border-gray-200 bg-zinc-200 py-2 text-base text-black hover:bg-black hover:text-white"
        >
          {slot.time}
        </Button>
      ))}
    </div>
  )
}
