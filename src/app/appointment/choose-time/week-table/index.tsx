"use client"

import { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fr"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import AvailableTimes from "../availaible-times"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Definindo o tipo Week
interface Week {
  startDate: Dayjs
  availableTimes: { hora: string; available: boolean }[][]
}

// Definindo o idioma francês para Day.js
dayjs.locale("fr")
// Adicionando o plugin isSameOrAfter ao Day.js
dayjs.extend(isSameOrAfter)

const WeekTable: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState<Week>({
    startDate: dayjs().startOf("week"), // Começa com o início da semana atual
    availableTimes: [],
  })

  useEffect(() => {
    // Carregar os horários de disponibilidade para a semana atual ao montar o componente
    loadWeekAvailability(currentWeek.startDate)
  }, [])

  const loadWeekAvailability = (startDate: Dayjs) => {
    // Aqui você faria uma chamada ao backend para buscar os horários de disponibilidade
    // para a semana começando em `startDate`
    // Vou deixar esta parte para você implementar de acordo com a sua lógica de backend
    // Este é apenas um exemplo fictício
    const availabilityData = getFakeWeekAvailability(startDate)

    setCurrentWeek({
      startDate,
      availableTimes: availabilityData,
    })
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

  // Função fictícia para gerar dados de disponibilidade de semana
  const getFakeWeekAvailability = (startDate: Dayjs) => {
    // Aqui você faria uma chamada ao backend para buscar os dados reais
    // Vou apenas retornar dados fictícios para demonstração
    return Array.from({ length: 7 }, (_, dayIndex) =>
      Array.from({ length: 4 }, (_, timeIndex) => ({
        hora: `${8 + timeIndex}:00`,
        available: Math.random() < 0.8, // 80% de chance de estar disponível
      })),
    )
  }

  // Verifica se o dia atual é maior ou igual ao primeiro dia da semana
  const isPastWeek = dayjs().isSameOrAfter(currentWeek.startDate, "day")

  return (
    <div className="hidden h-full min-h-[screen] bg-white lg:block">
      <div className=" flex items-center justify-between bg-black">
        <button
          className={`btn flex gap-2 px-4 py-2 text-zinc-100 transition-all hover:text-zinc-400 disabled:pointer-events-none disabled:cursor-not-allowed ${
            isPastWeek
              ? " bg-black/30 opacity-70 hover:text-zinc-400"
              : "bg-black"
          }`} // Adicionando classe condicional ao botão
          onClick={goToPreviousWeek}
          disabled={isPastWeek}
        >
          <ChevronLeft></ChevronLeft>
          Semaine précédente
        </button>
        <button
          onClick={goToNextWeek}
          className={`flex gap-2 bg-black px-4 py-2 text-zinc-100 transition-all hover:text-zinc-400`}
        >
          Semaine suivante
          <ChevronRight></ChevronRight>
        </button>
      </div>
      <div className=" overflow-x-auto">
        <table className="w-full table-fixed border-collapse ">
          <thead className="text-xl">
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <th key={index} className="border p-4 capitalize">
                  {
                    dayjs(currentWeek.startDate)
                      .add(index, "day")
                      .format("dddd, D MMMM")
                      .split(", ") // Dividir a string na vírgula
                      .map((part, partIndex) => (
                        <div key={partIndex} className="flex flex-col">
                          {partIndex === 0 ? ( // Verificar se é o primeiro elemento (dia da semana)
                            <span className="text-lg font-normal">{part}</span> // Aplicar estilo de fonte normal para a data
                          ) : (
                            <span className="text-xl font-bold">{part}</span> // Aplicar estilo de fonte negrito para o dia da semana
                          )}
                        </div>
                      ))
                      .reverse() // Inverter a ordem dos elementos do array
                  }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {currentWeek.availableTimes.map((times, index) => (
                <td key={index} className="border p-4 align-top">
                  <AvailableTimes
                    times={times.filter((time) => time.available)}
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
