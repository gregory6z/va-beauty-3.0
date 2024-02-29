"use client"

import { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fr"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Appointment } from "../week-table"

dayjs.locale("fr")
dayjs.extend(isSameOrAfter)

export const WeekAccordion: React.FC<{ data: Appointment[][] }> = ({
  data,
}) => {
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(null)
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [visibleTimes, setVisibleTimes] = useState<number[]>(
    Array.from({ length: 7 }, () => 12),
  ) // Inicialmente mostrar 12 horários
  const [days, setDays] = useState<Dayjs[]>([])

  const loadDays = () => {
    const currentDay = dayjs().startOf("day")
    const loadedDays = Array.from({ length: days.length + 7 }, (_, dayIndex) =>
      currentDay.add(dayIndex, "day"),
    )
    setDays(loadedDays)
  }

  const selectDay = (day: Dayjs) => {
    setSelectedDay(day)
  }

  const toggleItem = (value: string) => {
    setOpenItem((prevItem) => (prevItem === value ? null : value))
  }

  const showMoreTimes = (dayIndex: number) => {
    setVisibleTimes((prev) => {
      const newVisibleTimes = [...prev]
      newVisibleTimes[dayIndex] += 9 // Adicionar mais 9 horários
      return newVisibleTimes
    })
  }

  const showMoreDays = () => {
    loadDays()
  }

  useEffect(() => {
    loadDays()
  }, [])

  return (
    <Accordion.Root
      type="multiple"
      className="flex min-h-screen flex-col gap-3 lg:hidden"
    >
      {days.map((day, dayIndex) => (
        <Accordion.Item key={dayIndex} value={`item-${dayIndex}`}>
          <Accordion.Trigger
            className="flex w-full items-center justify-between bg-white px-[1.5rem] py-2"
            onClick={() => toggleItem(`item-${dayIndex}`)}
          >
            <span className="text-2xl">{day.format("dddd, D MMMM")}</span>
            {openItem === `item-${dayIndex}` ? (
              <ChevronUpIcon />
            ) : (
              <ChevronDownIcon />
            )}
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="grid grid-cols-3 gap-2 bg-white px-[1rem] py-[2rem]">
              {data[dayIndex]?.[0]?.timeSlots
                .filter((slot) => slot.available) // Filtra apenas os horários disponíveis
                .slice(0, Math.max(visibleTimes[dayIndex], 9)) // Garante que sempre haverá no mínimo 9 horários visíveis
                .map((slot, slotIndex) => (
                  <button
                    key={slotIndex}
                    onClick={() => selectDay(day)}
                    className="bg-zinc-200 py-2"
                  >
                    {formatMinuteToHour(slot.minute)}
                  </button>
                ))}
            </div>
            {/* Mostrar o botão "Ver mais horários" apenas se houver mais horários disponíveis */}
            {data[dayIndex]?.[0]?.timeSlots.filter((slot) => slot.available)
              .length > visibleTimes[dayIndex] && (
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
      <div className="mt-5 w-full border-t border-zinc-200 bg-white py-3 text-center">
        <button onClick={showMoreDays}>Ver mais dias</button>
      </div>
      {selectedDay && (
        <div>
          <h3>
            Horários disponíveis para {selectedDay.format("dddd, D MMMM")}
          </h3>
          {data[selectedDay.day() - 1]?.[0]?.timeSlots.map(
            (slot, slotIndex) => (
              <div key={slotIndex}>
                <button
                  className={`m-1 bg-${slot.available ? "green" : "red"}-300 p-2 hover:bg-${
                    slot.available ? "green" : "red"
                  }-400`}
                >
                  {formatMinuteToHour(slot.minute)}
                </button>
              </div>
            ),
          )}
        </div>
      )}
    </Accordion.Root>
  )
}

const formatMinuteToHour = (minute: number): string => {
  const hour = Math.floor(minute / 60)
  const minutePart = minute % 60
  const hourStr = hour.toString().padStart(2, "0")
  const minuteStr = minutePart.toString().padStart(2, "0")
  return `${hourStr}:${minuteStr}`
}
