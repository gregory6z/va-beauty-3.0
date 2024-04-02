"use client"

import { useAppointmentStore } from "@/app/stores/appointments"
import { TableCell, TableRow } from "@/components/ui/table"

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

  const futureDate = new Date()
  futureDate.setHours(futureDate.getHours() + 24)

  const isLessThan24Hours = new Date(appointment.date) < futureDate

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
        {isLessThan24Hours ? <p className="text-center">--/--</p> : children}
      </TableCell>
    </TableRow>
  )
}
