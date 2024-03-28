import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface Appointment {
  appointmentId: string
  date: string
  time: string
  services: string[]
  duration: number
}
export interface TableAppointmentsProps {
  appointments: Appointment[]
  pastAppointments?: boolean
}

export function TableAppointments({
  appointments,
  pastAppointments,
}: TableAppointmentsProps) {
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

  return (
    <Table
      className={`border-t-[1rem] border-zinc-900 ${pastAppointments ? "bg-zinc-100" : "bg-white"}`}
    >
      <TableHeader className="">
        <TableRow className=" lg:text-base">
          <TableHead className="w-[150px]">DATE</TableHead>
          <TableHead className="w-[100px]">HEURE</TableHead>
          <TableHead className="w-full ">SERVICES</TableHead>
          <TableHead className="text-right ">DURATION</TableHead>

          {pastAppointments ? null : (
            <TableHead className="min-w-[210px] text-right">
              CHANGER LA DATE
            </TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody className="lg:text-base ">
        {appointments.length === 0 ? (
          <TableRow>
            <TableCell
              className="h-full w-full  p-10 text-center text-zinc-900/60"
              colSpan={4}
            >
              Vous n'avez pas encore de rendez-vous
              {pastAppointments && " passés"}.
            </TableCell>
          </TableRow>
        ) : (
          appointments.map((appointment: Appointment) => (
            <TableRow key={appointment.appointmentId} className="">
              <TableCell className="h-16 font-medium">
                {appointment.date}
              </TableCell>
              <TableCell className="font-medium">{appointment.time}</TableCell>

              <TableCell>{appointment.services.join(", ")}</TableCell>
              <TableCell className="text-right">
                {formatDuration(appointment.duration)}
              </TableCell>

              <TableCell className="text-right">
                {pastAppointments ? null : (
                  <Button className="h-10 whitespace-nowrap">
                    Changer la date
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
