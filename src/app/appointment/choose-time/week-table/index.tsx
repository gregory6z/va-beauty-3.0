"use client"

import { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fr"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AvailableTimes from "../availaible-times"

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

const WeekTable: React.FC<{ data: Appointment[][] }> = ({ data }) => {
  const [currentWeek, setCurrentWeek] = useState<Week>({
    startDate: dayjs().startOf("week"), // Começa com o início da semana atual
    availableTimes: [],
  })

  useEffect(() => {
    // Carregar os horários de disponibilidade para a semana atual ao montar o componente
    loadWeekAvailability(currentWeek.startDate)
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

  return (
    <div className="hidden h-full min-h-[screen] bg-white lg:block">
      <div className=" flex items-center justify-between bg-black">
        <button
          className={`btn flex gap-2 px-4 py-2 text-zinc-100 transition-all hover:text-zinc-400`}
          onClick={goToPreviousWeek}
        >
          <ChevronLeft />
          Semaine précédente
        </button>
        <button
          onClick={goToNextWeek}
          className={`flex gap-2 bg-black px-4 py-2 text-zinc-100 transition-all hover:text-zinc-400`}
        >
          Semaine suivante
          <ChevronRight />
        </button>
      </div>
      <div className=" overflow-x-auto">
        <table className="w-full table-fixed border-collapse ">
          <thead className="text-xl">
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <th key={index} className="border p-4 capitalize">
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
          <tbody>
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <td key={index} className="border p-4 align-top">
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
