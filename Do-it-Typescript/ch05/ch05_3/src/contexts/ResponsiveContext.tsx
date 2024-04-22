import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { useWindowResize } from '../hooks'

type ContextType = {
  breakpoint: string
}

const defaultContextValue: ContextType = {
  breakpoint: ''
}

export const ResponsiveContextTest = createContext<ContextType>(defaultContextValue)

type ResponsiveProviderProps = {}
export const ResponsiveProvider: FC<PropsWithChildren<ResponsiveProviderProps>> = ({
  children,
  ...props
}) => {
  const [width] = useWindowResize()
  const breakpoint =
    width < 640
      ? 'sm'
      : width < 768
      ? 'md'
      : width < 1024
      ? 'lg'
      : width < 1280
      ? 'xl'
      : '2xl'
  const value = {
    breakpoint
  }
  return <ResponsiveContextTest.Provider value={value} children={children} />
}

export const useResponsive = () => {
  const { breakpoint } = useContext(ResponsiveContextTest)
  return breakpoint
}
