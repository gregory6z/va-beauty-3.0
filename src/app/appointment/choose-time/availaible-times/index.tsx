interface AvailableTimesProps {
  times: string[]
  disabled?: boolean
}

const AvailableTimes: React.FC<AvailableTimesProps> = ({
  times,
  disabled = false,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {times.map((time, index) => (
        <button
          key={index}
          className={`m-2  w-full py-2 ${disabled ? "cursor-not-allowed bg-blue-500 text-gray-600" : " border border-gray-200 text-black hover:bg-black hover:text-white"}`}
          disabled={disabled || isTimePassed(time)}
          style={disabled ? { pointerEvents: "none" } : {}}
        >
          {time}
        </button>
      ))}
    </div>
  )
}

// Função para verificar se um determinado horário já passou
const isTimePassed = (time: string): boolean => {
  const currentTime = new Date()
  const [hours, minutes] = time.split(":")
  const timeToCheck = new Date()
  timeToCheck.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0)

  return currentTime > timeToCheck
}

export default AvailableTimes
