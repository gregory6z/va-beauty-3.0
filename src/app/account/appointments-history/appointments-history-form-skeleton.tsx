import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export function AppointmentHistoryFormSkeleton() {
  return (
    <TableRow className="">
      <TableCell className="h-16 ">
        <Skeleton className="h-6 w-20"></Skeleton>
      </TableCell>
      <TableCell className="">
        <Skeleton className="h-6 w-20"></Skeleton>
      </TableCell>
      <TableCell>
        {" "}
        <Skeleton className="h-6 w-full"></Skeleton>
      </TableCell>{" "}
      <TableCell className="text-right">
        <Skeleton className="h-6 w-20"></Skeleton>
      </TableCell>
      <TableCell className="text-right">
        <Skeleton className="h-6 w-full"></Skeleton>
      </TableCell>
    </TableRow>
  )
}
