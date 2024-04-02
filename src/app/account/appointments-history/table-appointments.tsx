import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AppointmentHistoryForm } from "./appointments-history-form"
import { ReactNode } from "react"
export interface Appointment {
  appointmentId: string
  date: string
  time: string
  services: string[]
  duration: number
  dateTime: Date
}
export interface TableAppointmentsProps {
  appointments: Appointment[]
  pastAppointments?: boolean
  children: ReactNode
}

export function TableAppointments({
  appointments,
  pastAppointments,
  children,
}: TableAppointmentsProps) {
  const futureDate = new Date()
  futureDate.setHours(futureDate.getHours() + 24)

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
          appointments.map((appointment: Appointment) => {
            return (
              <AppointmentHistoryForm
                appointment={appointment}
                key={appointment.appointmentId}
              >
                {children}
              </AppointmentHistoryForm>
            )
          })
        )}
      </TableBody>
    </Table>
  )
}
