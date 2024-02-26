interface TimeSlot {
  hora: string
  available: boolean
}

interface AvailableTimesProps {
  times: TimeSlot[]
  disabled?: boolean
}

const AvailableTimes: React.FC<AvailableTimesProps> = ({
  times,
  disabled = false,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {times.map((slot, index) => (
        <button
          key={index}
          className={`m-2 w-full py-2 ${disabled || !slot.available ? "cursor-not-allowed  text-gray-600" : "border border-gray-200 bg-zinc-200 text-black hover:bg-black hover:text-white"}`}
          disabled={disabled || !slot.available}
          style={disabled || !slot.available ? { pointerEvents: "none" } : {}}
        >
          {slot.hora}
        </button>
      ))}
    </div>
  )
}

export default AvailableTimes
