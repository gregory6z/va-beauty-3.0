"use client"

import { useRef } from "react"
import { Service } from "../components/fetch-services"
import { useCartServiceStore } from "./cartServices"

interface InitializerProps {
  allServices?: Service[]
}

export function StoreInitializer({ allServices }: InitializerProps) {
  const initialized = useRef(false)
  if (!initialized.current) {
    useCartServiceStore.setState({ allServices })
    initialized.current = true
  }
  return null
}
