import React from 'react'
import { inputIcon } from './InputIcon.css'

export interface InputIconProps {
  icon?: React.ReactNode
  clickable?: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const InputIconComponent: React.FC<InputIconProps> = ({ icon, clickable, onClick }) => {
  return (
    <span className={inputIcon} onClick={onClick}>
      {icon}
    </span>
  )
}

const InputIcon = React.memo(InputIconComponent)
export default InputIcon
