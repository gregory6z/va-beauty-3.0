// AvailableTimes.tsx

"use client"

import { setCookie } from "nookies"

// Definindo a interface para um intervalo de tempo
interface TimeSlot {
  time: string
  available: boolean
  day: Date
}

// Definindo a interface para as propriedades de AvailableTimes
interface AvailableTimesProps {
  times: TimeSlot[]

  // Um array de intervalos de tempo
  // day: string // O dia associado aos intervalos de tempo
}

// Definindo o componente funcional AvailableTimes
const AvailableTimes: React.FC<AvailableTimesProps> = ({ times }) => {
  // Função para lidar com o clique em um intervalo de tempo
  // const handleTimeSlotClick = (time: string) => {
  //   console.log("Dia e tempo clicados:", day, time)
  // }

  // Filtrando os intervalos de tempo para excluir aqueles que não estão disponíveis
  const activeTimes = times.filter((slot) => slot.available)

  const handleTimeSlotClick = (day: Date, time: string) => {
    const [hours, minutes] = time.split(":").map(Number)
    const newDate = new Date(day)
    newDate.setHours(hours)
    newDate.setMinutes(minutes)

    // Salvando o objeto Date nos cookies
    setCookie(null, "@VaBeauty:date", newDate.toISOString(), {
      maxAge: 30 * 24 * 60 * 60, // 30 dias de validade
      path: "/", // caminho raiz
    })
  }

  return (
    <div className="flex flex-wrap justify-center">
      {activeTimes.map((slot, index) => (
        <button
          key={index}
          onClick={() => handleTimeSlotClick(slot.day, slot.time)}
          className="m-2 w-full border border-gray-200 bg-zinc-200 py-2 text-black hover:bg-black hover:text-white"
        >
          {slot.time}
        </button>
      ))}
    </div>
  )
}

export default AvailableTimes
