import styled from 'styled-components'
import { css } from 'styled-components'

import { ButtonProps } from '.'

export const IconContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 2px;
`

export const ButtonContainer = styled('button')<ButtonProps>`
  ${({ theme, variant = 'primary' }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    min-width: 130px;
    padding: 10px 16px;
    border: none;
    border-radius: ${theme.border.radius.small};
    transition: all 0.1s ease-in;

    ${variant == 'primary' &&
    css`
      background-color: ${theme.colors.green_300};

      ${IconContainer}, p {
        color: ${theme.colors.white};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

    ${variant == 'secondary' &&
    css`
      background-color: ${theme.colors.green_100};

      ${IconContainer}, p {
        color: ${theme.colors.green_300};
      }

      &:hover {
        opacity: 0.8;
      }
    `}
  `}
`
