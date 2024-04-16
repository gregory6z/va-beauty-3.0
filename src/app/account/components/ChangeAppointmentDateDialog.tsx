import { getData, splitArray } from "@/app/appointment/choose-time/page"
import { Button } from "@/components/ui/button"
import { parseCookies } from "nookies"

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
import WeekTable from "../../appointment/choose-time/week-table"

export async function ChangeAppointmentDataDialog() {
  const data = await getData()

  const newArray = splitArray(data)

  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button>Changer la date</Button>
      </DialogTrigger>
      <DialogContent className="mt-40 h-full min-w-[1080px] overflow-scroll  p-20  pb-80">
        <DialogHeader className="  ">
          <DialogTitle className="">Mudar a data</DialogTitle>
          <DialogDescription>
            Selecione o dia para mudar a data{" "}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 ">
          <WeekTable data={newArray} />
        </div>
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
