"use client"

import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fr"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import AvailableTimes from "../availaible-times"

// Definindo o tipo Week
interface Week {
  startDate: Dayjs
  availableTimes: string[][]
}

// Definindo o idioma francês para Day.js
dayjs.locale("fr")
// Adicionando o plugin isSameOrAfter ao Day.js
dayjs.extend(isSameOrAfter)

const WeekTable = () => {
  const [currentWeek, setCurrentWeek] = useState<Week>({
    startDate: dayjs().startOf("week"), // Começa com o início da semana atual
    availableTimes: [
      ["08:00", "09:00", "10:00", "11:00"], // Segunda-feira
      ["09:00", "10:00", "11:00", "12:00"], // Terça-feira
      ["10:00", "11:00", "12:00", "13:00"], // Quarta-feira
      ["08:00", "09:00", "10:00", "11:00"], // Quinta-feira
      ["09:00", "10:00", "11:00", "12:00"], // Sexta-feira
      ["08:00", "09:00", "10:00", "11:00"], // Sábado
      ["09:00", "10:00", "11:00", "12:00"], // Domingo
    ],
  })

  const goToPreviousWeek = () => {
    setCurrentWeek((prevWeek) => ({
      startDate: dayjs(prevWeek.startDate).subtract(7, "day"),
      availableTimes: generateAvailableTimes(
        dayjs(prevWeek.startDate).subtract(7, "day"),
      ),
    }))
  }

  const goToNextWeek = () => {
    setCurrentWeek((prevWeek) => ({
      startDate: dayjs(prevWeek.startDate).add(7, "day"),
      availableTimes: generateAvailableTimes(
        dayjs(prevWeek.startDate).add(7, "day"),
      ),
    }))
  }

  // Função para gerar os horários disponíveis para uma determinada semana
  const generateAvailableTimes = (startDate: Dayjs): string[][] => {
    // Lógica para gerar os horários disponíveis para a semana
    // Esta é uma lógica fictícia, você precisa implementar a lógica real com base nos dados recebidos do backend
    return [
      ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
      ["09:00", "10:00", "11:00", "12:00"],
      ["10:00", "11:00", "12:00", "13:00"],
      ["08:00", "09:00", "10:00", "11:00"],
      ["09:00", "10:00", "11:00", "12:00"],
      ["08:00", "09:00", "10:00", "11:00"],
      ["09:00", "10:00", "11:00", "12:00"],
    ]
  }

  // Verifica se o dia atual é maior ou igual ao primeiro dia da semana
  const isPastWeek = dayjs().isSameOrAfter(currentWeek.startDate, "day")

  return (
    <div>
      <div className=" flex items-center justify-between bg-black">
        <button
          className={`btn flex gap-2 px-4 py-2 text-white ${isPastWeek ? "cursor-not-allowed  bg-black/30" : "bg-black"}`} // Adicionando classe condicional ao botão
          onClick={goToPreviousWeek}
          disabled={isPastWeek}
        >
          Semaine précédente
        </button>
        <button
          onClick={goToNextWeek}
          className={`flex gap-2 bg-black px-4 py-2 text-white`}
        >
          Semaine suivante
        </button>
      </div>
      <div className=" overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <th key={index} className="border p-4">
                  {dayjs(currentWeek.startDate)
                    .add(index, "day")
                    .format("dddd, D MMMM")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <td key={index} className="border p-4 align-top">
                  <AvailableTimes
                    times={times}
                    disabled={dayjs(currentWeek.startDate)
                      .add(index, "day")
                      .isBefore(dayjs(), "day")}
                  />
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
