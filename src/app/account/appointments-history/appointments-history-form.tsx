"use client"

import { useAppointmentStore } from "@/app/stores/appointments"
import { TableCell, TableRow } from "@/components/ui/table"
import { isBefore, add } from "date-fns"

export interface Appointment {
  appointmentId: string
  date: string
  time: string
  services: string[]
  duration: number
  dateTime: Date
}

interface AppointmentRowProps {
  appointment: Appointment
  children?: React.ReactNode
}

export function AppointmentHistoryForm({
  appointment,
  children,
}: AppointmentRowProps) {
  const { setAppointmentAndDate } = useAppointmentStore()

  function formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    let result = ""
    if (hours > 0) {
      result += `${hours}h `
    }
    if (remainingMinutes > 0) {
      result += ` ${remainingMinutes}m`
    }
    return result.trim()
  }

  console.log(appointment.dateTime.toString())

  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  const now = new Date()
  const tomorrow = add(now, { days: 1 })

  return (
    <TableRow
      className=""
      onClick={() =>
        setAppointmentAndDate(
          appointment.appointmentId,
          appointment.dateTime.toString(),
        )
      }
    >
      <TableCell className="h-16 font-medium">{appointment.date}</TableCell>
      <TableCell className="font-medium">{appointment.time}</TableCell>
      <TableCell>
        {Array.isArray(appointment.services)
          ? appointment.services.join(", ")
          : ""}
      </TableCell>{" "}
      <TableCell className="text-right">
        {formatDuration(appointment.duration)}
      </TableCell>
      <TableCell className="text-right">
        {isBefore(
          new Date(appointment.dateTime),
          add(new Date(), { days: 1 }),
        ) ? (
          <p className="text-center">--/--</p>
        ) : (
          children
        )}
      </TableCell>
    </TableRow>
  )
}
