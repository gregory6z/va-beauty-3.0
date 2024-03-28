import dayjs from "dayjs"

export function formatDate(date: Date) {
  return dayjs(date).format("DD/MM/YYYY HH[h]mm")
}
