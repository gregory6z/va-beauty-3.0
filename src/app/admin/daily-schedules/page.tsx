import { DailyTable } from "../components/daily-table"
import { DatePicker } from "../components/datepicker"

export default function DailySchedules() {
  return (
    <div className="px-20 pt-12">
      <header className="items-cente flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Minha Agenda</h1>
          <p className="mt-2 text-zinc-900/60">
            Consulte os seus agendamentos por dia
          </p>
        </div>
        <DatePicker />
      </header>
      <main className="mt-10">
        <DailyTable />
      </main>
    </div>
  )
}
