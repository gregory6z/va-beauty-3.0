import { setCookie, parseCookies } from "nookies"
import { Service } from "../app/components/fetch-services"

// Função para adicionar itens ao carrinho nos cookies
export const addItemsToCartCookies = (items: Service[]) => {
  const existingItems = getItemsFromCartCookies()
  const updatedItems = [...existingItems, ...items]
  updateCartCookies(updatedItems)
}

// Função para atualizar os itens do carrinho nos cookies
export const updateCartCookies = (items: Service[]) => {
  setCookie(null, "VaBeauty:CartItems", JSON.stringify(items), {
    maxAge: 30 * 24 * 60 * 60, // Define a validade do cookie para 30 dias
    path: "/", // Define o caminho do cookie como a raiz do site
  })
}

// Função para obter os itens do carrinho dos cookies
export const getItemsFromCartCookies = (): Service[] => {
  const cookies = parseCookies()
  return cookies["VaBeauty:CartItems"]
    ? JSON.parse(cookies["VaBeauty:CartItems"])
    : []
}
