"use client"

import { useState, useEffect } from "react"

import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fr"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AvailableTimes } from "../availaible-times"
import { Button } from "@/components/ui/button"
import { parseCookies } from "nookies"

// Definindo o tipo Week
interface Week {
  startDate: Dayjs
  availableTimes: { time: string; available: boolean; day: Date }[][]
}

export interface Appointment {
  day: Date
  timeSlots: { minute: number; available: boolean }[]
}

// Definindo o idioma francês para Day.js
dayjs.locale("fr")

const WeekTable: React.FC<{
  data: Appointment[][]
}> = ({ data }) => {
  const cookies = parseCookies()
  const changeDate = cookies["@VaBeauty:changeDate"]

  const [currentWeek, setCurrentWeek] = useState<Week>({
    startDate: changeDate
      ? dayjs(changeDate).startOf("week")
      : dayjs().startOf("week"),
    availableTimes: [],
  })

  useEffect(() => {
    // Carregar os horários de disponibilidade para a semana atual ao montar o componente
    loadWeekAvailability(currentWeek.startDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadWeekAvailability = (startDate: Dayjs) => {
    // Encontrar os dados de disponibilidade apenas para a semana atual
    const weekData = data.find((appointments) =>
      dayjs(appointments[0].day).isSame(startDate, "week"),
    )

    // Determinar a data de início da semana
    const firstDayOfWeek = weekData
      ? dayjs(weekData[0].day).startOf("day")
      : dayjs().startOf("week")

    if (weekData) {
      // Converter os minutos em horas para cada intervalo de disponibilidade
      const availableTimes = weekData.map((appointment) =>
        appointment.timeSlots.map((slot) => ({
          time: formatMinuteToHour(slot.minute),
          day: appointment.day,
          available: slot.available,
        })),
      )

      setCurrentWeek({
        startDate: firstDayOfWeek,
        availableTimes,
      })
    } else {
      console.error(
        "Dados de disponibilidade não encontrados para a semana atual.",
      )
      // Se os dados não forem encontrados, você pode tratar isso de acordo com sua lógica
    }
  }

  // Função auxiliar para formatar minutos em horas no formato 24 horas
  const formatMinuteToHour = (minute: number): string => {
    const hour = Math.floor(minute / 60)
    const minutePart = minute % 60
    const hourStr = hour.toString().padStart(2, "0")
    const minuteStr = minutePart.toString().padStart(2, "0")

    return `${hourStr}:${minuteStr}`
  }

  const goToPreviousWeek = () => {
    setCurrentWeek((prevWeek) => ({
      startDate: dayjs(prevWeek.startDate).subtract(7, "day"),
      availableTimes: [], // Limpar os horários de disponibilidade ao mudar de semana
    }))
    loadWeekAvailability(dayjs(currentWeek.startDate).subtract(7, "day"))
  }

  const goToNextWeek = () => {
    setCurrentWeek((prevWeek) => ({
      startDate: dayjs(prevWeek.startDate).add(7, "day"),
      availableTimes: [], // Limpar os horários de disponibilidade ao mudar de semana
    }))
    loadWeekAvailability(dayjs(currentWeek.startDate).add(7, "day"))
  }
  const isFirstWeek = dayjs(data[0][0].day).isSame(
    currentWeek.startDate,
    "week",
  )

  return (
    <div className="hidden h-full min-h-[screen] border bg-white lg:block ">
      <div className=" flex  items-center justify-between rounded-t-sm bg-zinc-900">
        <Button
          className={` flex gap-2 bg-zinc-900 px-4 py-2 text-zinc-100 transition-all hover:text-zinc-400`}
          onClick={goToPreviousWeek}
          disabled={isFirstWeek}
          size={"sm"}
        >
          <ChevronLeft />
          Semaine précédente
        </Button>
        <Button
          onClick={goToNextWeek}
          size={"sm"}
          className={`flex gap-2 bg-zinc-900 px-4 py-2 text-zinc-100 transition-all hover:text-zinc-400`}
        >
          Semaine suivante
          <ChevronRight />
        </Button>
      </div>
      <div className="  max-h-[60rem] overflow-auto px-6 pb-12 ">
        <table className="w-full table-fixed animate-fadeIn    ">
          <thead className="sticky top-0 z-10  bg-white text-xl">
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <th key={index} className="  border-b bg-white p-4 capitalize">
                  <div className="text-center">
                    <div>
                      {dayjs(currentWeek.startDate)
                        .add(index, "day")
                        .format("dddd")}
                    </div>
                    <div>
                      {dayjs(currentWeek.startDate)
                        .add(index, "day")
                        .format("D MMMM")}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" ">
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <td key={index} className="   p-4 align-top">
                  <AvailableTimes times={times} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WeekTable
