import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const appointments = [
  {
    id: 1,
    date: "2022-10-01",
    time: "13H00",
    duration: "45 min",
    services: "Micropigmentacao, Sourcils",
  },
  {
    id: 2,
    date: "2022-10-02",
    time: "14H00",
    duration: "30 min",
    services: "Manicure, Pedicure",
  },
  {
    id: 3,
    date: "2022-10-03",
    time: "15H00",
    duration: "60 min",
    services: "Corte de cabelo",
  },
  {
    id: 4,
    date: "2022-10-04",
    time: "16H00",
    duration: "45 min",
    services: "Coloração de cabelo",
  },
  {
    id: 5,
    date: "2022-10-05",
    time: "17H00",
    duration: "30 min",
    services: "Limpeza de pele",
  },
  {
    id: 6,
    date: "2022-10-06",
    time: "18H00",
    duration: "60 min",
    services: "Massagem",
  },
]

export function TableAppointments() {
  return (
    <Table className="border-t-[1rem] border-zinc-900 bg-white">
      <TableHeader className="">
        <TableRow className=" lg:text-base">
          <TableHead className="w-[150px]">DATE</TableHead>
          <TableHead className="w-[100px]">HEURE</TableHead>
          <TableHead className="w-[100px]">DURATION</TableHead>
          <TableHead className=" ">SERVICES</TableHead>

          <TableHead className="text-right">CHANGER LA DATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="lg:text-base ">
        {appointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell className="font-medium">{appointment.date}</TableCell>
            <TableCell className="font-medium">{appointment.time}</TableCell>
            <TableCell className="font-medium">
              {appointment.duration}
            </TableCell>
            <TableCell>{appointment.services}</TableCell>

            <TableCell className="text-right">
              <Button className="h-10 whitespace-nowrap">
                Changer la date
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
