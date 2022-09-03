import { FC, PropsWithChildren } from 'react'
import { clsx } from 'clsx'

export interface ButtonProps {
  className?: string
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'rounded bg-blue-400 px-2 py-1 text-white active:bg-blue-500',
        props.className
      )}
    >
      {children}
    </button>
  )
}
