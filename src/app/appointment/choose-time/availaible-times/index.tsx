"use client"

interface TimeSlot {
  time: string
  available: boolean
}

interface AvailableTimesProps {
  times: TimeSlot[]
  onTimeSlotClick: (time: string) => void
}

const AvailableTimes: React.FC<AvailableTimesProps> = ({
  times,
  onTimeSlotClick,
}) => {
  // Filtrar os slots de tempo para excluir aqueles que estão desabilitados
  const activeTimes = times.filter((slot) => slot.available)

  return (
    <div className="flex flex-wrap justify-center">
      {activeTimes.map((slot, index) => (
        <button
          key={index}
          onClick={() => onTimeSlotClick(slot.time)}
          className="m-2 w-full border border-gray-200 bg-zinc-200 py-2 text-black hover:bg-black hover:text-white"
        >
          {slot.time}
        </button>
      ))}
    </div>
  )
}

export default AvailableTimes
