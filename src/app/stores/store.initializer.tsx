"use client"

import { useRef } from "react"
import { Service } from "../components/fetch-services"
import { useServiceStore } from "./Services"
// import { useServicesStore } from "./services"

interface InitializerProps {
  // serviceCategory?: string
  allServices?: Service[]
}

export function StoreInitializer({
  // serviceCategory,
  allServices,
}: InitializerProps) {
  const initialized = useRef(false)
  if (!initialized.current) {
    // useServicesStore.setState({ serviceCategory })
    useServiceStore.setState({ allServices })
    initialized.current = true
  }
  return null
}
