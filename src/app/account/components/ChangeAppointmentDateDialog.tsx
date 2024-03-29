import { getData } from "@/app/appointment/choose-time/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Appointment } from "../appointments-history/table-appointments"

export async function ChangeAppointmentDataDialog() {
  const data: Appointment[] = await getData()

  const newArray = splitArray(data)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Changer la date</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Mudar a data</DialogTitle>
          <DialogDescription>
            Selecione o dia para mudar a data{" "}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
