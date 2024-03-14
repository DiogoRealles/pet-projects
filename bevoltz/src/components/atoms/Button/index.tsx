import React from 'react'

import { Text } from '../Text'
import { ButtonContainer, IconContainer } from './styles'

export interface ButtonProps {
  content: string
  variant: 'primary' | 'secondary'
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const Button: React.FC<ButtonProps> = ({ content, variant, icon }) => {
  return (
    <ButtonContainer content={content} variant={variant}>
      <Text content={content} color="white" size="xsmall" weight="semiBold" />

      {icon && (
        <IconContainer>
          {React.cloneElement(icon, { size: '15', weight: 'bold' })}
        </IconContainer>
      )}
    </ButtonContainer>
  )
}
