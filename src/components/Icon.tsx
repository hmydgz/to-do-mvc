import { FC } from "react"

type Icon = FC<{
  onClick?: React.MouseEventHandler
  className?: string
}>

export const DeleteIcon: Icon = ({ onClick, className = 'w-4 h-4' }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} onClick={onClick}>
    <path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path>
  </svg>
}

export const EditIcon: Icon = ({ onClick, className = 'w-4 h-4' }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} onClick={onClick}>
    <path d="M2 26h28v2H2z" fill="currentColor"></path>
    <path d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z" fill="currentColor"></path>
  </svg>
}

export const CheckIcon: Icon = ({ onClick, className = 'w-4 h-4' }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} onClick={onClick}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z" fill="currentColor"></path>
  </svg>
}

export const UnCheckIcon: Icon = ({ onClick, className = 'w-4 h-4' }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className={className} onClick={onClick}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z" fill="currentColor"></path>
  </svg>
}