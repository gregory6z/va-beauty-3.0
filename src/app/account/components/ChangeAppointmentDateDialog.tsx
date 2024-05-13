import { getData, splitArray } from "@/app/appointment/choose-time/page"
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import WeekTable from "../../appointment/choose-time/week-table"
import { WeekAccordion } from "@/app/appointment/choose-time/week-accordeon"

export async function ChangeAppointmentDataDialog() {
  const data = await getData()

  const appointments = splitArray(data)

  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button className="mt-12 flex h-12  w-full lg:mt-0 lg:h-8   ">
          Changer la date
        </Button>
      </DialogTrigger>
      <DialogContent className="mt-[4rem] h-full overflow-scroll pb-80 pt-10 lg:mt-[6rem]  lg:min-w-[1080px]  lg:p-10">
        <DialogHeader className="  ">
          <DialogTitle className="">Changer la date</DialogTitle>
          <DialogDescription>
            Sélectionnez le jour pour changer la date
          </DialogDescription>
        </DialogHeader>

        <WeekTable data={appointments} />
        <div className="mt-8">
          <WeekAccordion data={data} />
        </div>

        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
