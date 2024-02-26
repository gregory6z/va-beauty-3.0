"use client"

import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fr"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { useState, useEffect } from "react"

// Definindo o tipo para os horários de disponibilidade
interface Availability {
  hora: string
  available: boolean
}

// Definindo o idioma francês para Day.js
dayjs.locale("fr")
// Adicionando o plugin isSameOrAfter ao Day.js
dayjs.extend(isSameOrAfter)

const WeekAccordion: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(null)
  const [openItem, setOpenItem] = useState<string | null>(null) // Armazenar o valor do Accordion aberto
  const [visibleTimes, setVisibleTimes] = useState<number[]>(
    Array.from({ length: 7 }, () => 9),
  ) // Definindo o número inicial de horários visíveis para cada dia
  const [days, setDays] = useState<Dayjs[]>([])

  // Função para carregar os dias
  const loadDays = () => {
    const currentDay = dayjs().startOf("day")
    const loadedDays = Array.from({ length: days.length + 7 }, (_, dayIndex) =>
      currentDay.add(dayIndex, "day"),
    )
    setDays(loadedDays)
  }

  // Função para selecionar um dia
  const selectDay = (day: Dayjs) => {
    setSelectedDay(day)
  }

  // Função para alternar a abertura/fechamento de um item do acordeão
  const toggleItem = (value: string) => {
    setOpenItem((prevItem) => (prevItem === value ? null : value)) // Se o Accordion clicado for o mesmo que já está aberto, feche-o; caso contrário, abra-o
  }

  // Função para exibir mais horários quando o botão for clicado
  const showMoreTimes = (dayIndex: number) => {
    setVisibleTimes((prev) => {
      const newVisibleTimes = [...prev]
      newVisibleTimes[dayIndex] += 9 // Adicionando mais 9 horários visíveis
      return newVisibleTimes
    })
  }

  // Função para exibir mais 7 dias
  const showMoreDays = () => {
    loadDays()
  }

  // Efeito para carregar os dias ao montar o componente
  useEffect(() => {
    loadDays()
  }, [])

  return (
    <Accordion.Root
      type="multiple"
      className={`flex flex-col gap-3 lg:hidden `}
    >
      {/* Renderizar os dias como acordeões */}
      {days.map((day, dayIndex) => (
        <Accordion.Item key={dayIndex} value={`item-${dayIndex}`}>
          <Accordion.Trigger className="flex w-full items-center justify-between bg-white px-[1.5rem] py-2">
            <span className="text-2xl">{day.format("dddd, D MMMM")}</span>
            {openItem === `item-${dayIndex}` ? (
              <ChevronUpIcon />
            ) : (
              <ChevronDownIcon />
            )}{" "}
            {/* Alterar o ícone com base no estado de abertura do Accordion */}
          </Accordion.Trigger>
          <Accordion.Content>
            {/* Renderizar os horários disponíveis */}
            <div className=" grid grid-cols-3 gap-2 bg-white px-[1rem] py-[2rem]">
              {Array.from(
                { length: visibleTimes[dayIndex] },
                (_, timeIndex) => {
                  const time = {
                    hora: `${8 + timeIndex}:00`,
                    available: Math.random() < 0.8,
                  }
                  return time.available ? (
                    <button
                      key={timeIndex}
                      onClick={() => selectDay(day)}
                      className="bg-zinc-200 py-2"
                    >
                      {time.hora}
                    </button>
                  ) : null
                },
              )}
            </div>
            {/* Renderizar botão para exibir mais horários */}
            {visibleTimes[dayIndex] < 20 && ( // Mostrar o botão apenas se ainda houver mais horários para mostrar
              <button
                onClick={() => showMoreTimes(dayIndex)}
                className="w-full border-t border-zinc-200 bg-white py-3 text-center"
              >
                Ver mais horários
              </button>
            )}
          </Accordion.Content>
        </Accordion.Item>
      ))}
      {/* Botão para exibir mais 7 dias */}
      <div className="mt-5 w-full border-t border-zinc-200 bg-white py-3 text-center">
        <button onClick={showMoreDays}>Ver mais dias</button>
      </div>
      {/* Renderizar os horários de disponibilidade para o dia selecionado */}
      {selectedDay && (
        <div>
          <h3>
            Horários disponíveis para {selectedDay.format("dddd, D MMMM")}
          </h3>
          {/* Renderizar os horários de disponibilidade */}
          {Array.from({ length: 20 }, (_, timeIndex) => {
            const time = {
              hora: `${8 + timeIndex}:00`,
              available: Math.random() < 0.8,
            }
            return time.available ? (
              <div key={timeIndex}>
                {/* Manter o estilo dos horários disponíveis */}
                <button
                  className={`m-1 bg-${
                    time.available ? "green" : "red"
                  }-300 p-2 hover:bg-${time.available ? "green" : "red"}-400`}
                >
                  {time.hora}
                </button>
              </div>
            ) : null
          })}
        </div>
      )}
    </Accordion.Root>
  )
}

export default WeekAccordion
