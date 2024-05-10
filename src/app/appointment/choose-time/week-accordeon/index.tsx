"use client"

import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import "dayjs/locale/fr"
import { setCookie } from "nookies"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Button } from "@/components/ui/button"

dayjs.locale("fr")

interface Appointment {
  day: string
  timeSlots: { minute: number; available: boolean }[]
}

export const WeekAccordion: React.FC<{ data: Appointment[][] }> = ({
  data,
}) => {
  const [parent] = useAutoAnimate()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [visibleTimes, setVisibleTimes] = useState<number[]>(
    Array.from({ length: 140 }, () => 12),
  ) // Inicialmente mostrar 12 horários
  const [displayedWeeks, setDisplayedWeeks] = useState(1) // Adicionado para controlar o número de semanas exibidas

  // Função para adicionar mais uma semana à exibição
  const addWeek = () => setDisplayedWeeks((weeks) => weeks + 1)

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

  const handleTimeSlotClick = (day: Dayjs, time: string) => {
    const [hours, minutes] = time.split(":").map(Number)
    const selectedDateTime = day
      .startOf("day")
      .add(hours, "hour")
      .add(minutes, "minute")

    // Salvando o objeto Date nos cookies
    setCookie(null, "@VaBeauty:date", selectedDateTime.toISOString(), {
      maxAge: 30 * 24 * 60 * 60, // 30 dias de validade
      path: "/", // caminho raiz
    })
  }

  return (
    <Accordion type="multiple" className="flex  flex-col gap-3 lg:hidden">
      {/* Exibe os dias das semanas que devem ser exibidas */}
      {data
        .flat()
        .slice(0, displayedWeeks * 7)
        .map((dayData, dayIndex) => (
          <AccordionItem key={dayIndex} value={`item-${dayIndex}`}>
            <AccordionTrigger
              className="flex w-full items-center justify-between bg-white px-[1.5rem] py-3"
              onClick={() => toggleItem(`item-${dayIndex}`)}
            >
              <span className="text-2xl">
                {dayjs(dayData.day).format("dddd, D MMMM")}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div
                ref={parent}
                className="grid grid-cols-3 gap-2 bg-white px-[1rem] py-[2rem] "
              >
                {dayData.timeSlots
                  .filter((slot) => slot.available) // Filtra apenas os horários disponíveis
                  .slice(0, Math.max(visibleTimes[dayIndex], 9)) // Garante que sempre haverá no mínimo 9 horários visíveis
                  .map((slot, slotIndex) => (
                    <button
                      key={slotIndex}
                      onClick={() =>
                        handleTimeSlotClick(
                          dayjs(dayData.day),
                          formatMinuteToHour(slot.minute),
                        )
                      }
                      className="bg-zinc-200 py-2"
                    >
                      {formatMinuteToHour(slot.minute)}
                    </button>
                  ))}
              </div>
              {/* Mostrar o botão "Ver mais horários" apenas se houver mais horários disponíveis */}
              {dayData.timeSlots.filter((slot) => slot.available).length >
                visibleTimes[dayIndex] && (
                <button
                  onClick={() => showMoreTimes(dayIndex)}
                  className="w-full border-t border-zinc-200 bg-white py-3 text-center"
                >
                  Ver mais horários
                </button>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}

      {/* Botão para adicionar mais uma semana à exibição */}
      <Button variant="ghost" className="mt-4 text-lg" onClick={addWeek}>
        Afficher la semaine prochaine
      </Button>
    </Accordion>
  )
}

const formatMinuteToHour = (minute: number): string => {
  const hour = Math.floor(minute / 60)
  const minutePart = minute % 60
  const hourStr = hour.toString().padStart(2, "0")
  const minuteStr = minutePart.toString().padStart(2, "0")
  return `${hourStr}:${minuteStr}`
}
