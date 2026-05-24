import { createContext, useContext } from 'react'

export const ViewContext = createContext(false)
export const useMobile = () => useContext(ViewContext)
