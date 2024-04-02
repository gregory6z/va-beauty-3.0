import { destroyCookie, parseCookies, setCookie } from "nookies"
import { create } from "zustand"

type Store = {
  appointmentId: string
  date: Date
  setAppointmentAndDate: (appointmentId: string, date: string) => void
  removeAppointmentAndDate: () => void
}

export const useAppointmentStore = create<Store>((set) => ({
  appointmentId: parseCookies().appointmentId || "",
  date: new Date(parseCookies()["@VaBeauty:changeDate"] || ""),
  setAppointmentAndDate: (appointmentId, date) => {
    setCookie(null, "@VaBeauty:appointmentId", appointmentId, { path: "/" })
    setCookie(null, "@VaBeauty:changeDate", new Date(date).toISOString(), {
      path: "/",
    })
    set({ appointmentId, date: new Date(date) })
  },
  removeAppointmentAndDate: () => {
    destroyCookie(null, "@VaBeauty:appointmentId", { path: "/" })
    destroyCookie(null, "@VaBeauty:changeDate", { path: "/" })
    set({ appointmentId: "", date: new Date("") })
  },
}))
