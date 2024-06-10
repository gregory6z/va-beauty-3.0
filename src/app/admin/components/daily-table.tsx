import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function DailyTable() {
  return (
    <Table>
      <TableCaption>Lista de agendamentos.</TableCaption>
      <TableHeader>
        <TableRow className=" ">
          <TableHead className="w-[0px]">Hora</TableHead>
          <TableHead className="w-[100px]">Cliente</TableHead>
          <TableHead>Serviços</TableHead>
          <TableHead className="text-right">Alterar agendamento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-white">
          <TableCell className="font-medium">10:00</TableCell>

          <TableCell>
            <p className=" w-[200px] truncate">Gregory Praxedes</p>
          </TableCell>
          <TableCell>
            <p className=" w-[320px] overflow-hidden text-ellipsis">
              Sourcils Parfaits, Sourcils Parfaits,
            </p>
          </TableCell>
          <TableCell className="space-x-4  text-right">
            <Button size="sm" variant="ghost" className="max-h-10px">
              Mudar data{" "}
            </Button>
            <Button size="sm">Cancelar</Button>
          </TableCell>
        </TableRow>

        <TableRow className="hover:bg-white">
          <TableCell className="font-medium">10:00</TableCell>

          <TableCell>Gregory Praxedes</TableCell>
          <TableCell>Sourcils Parfaits</TableCell>
          <TableCell className="space-x-4  text-right">
            <Button size="sm" variant="ghost" className="max-h-10px">
              Mudar data{" "}
            </Button>
            <Button size="sm">Cancelar</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">10:00</TableCell>

          <TableCell>Gregory Praxedes</TableCell>
          <TableCell>Sourcils Parfaits</TableCell>
          <TableCell className="space-x-4  text-right">
            <Button size="sm" variant="ghost" className="max-h-10px">
              Mudar data{" "}
            </Button>
            <Button size="sm">Cancelar</Button>
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-white">
          <TableCell className="font-medium">10:00</TableCell>

          <TableCell>Gregory Praxedes</TableCell>
          <TableCell>Sourcils Parfaits</TableCell>
          <TableCell className="space-x-4  text-right">
            <Button size="sm" variant="ghost" className="max-h-10px">
              Mudar data{" "}
            </Button>
            <Button size="sm">Cancelar</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
