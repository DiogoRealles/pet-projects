import styled from 'styled-components'
import { css } from 'styled-components'

import { TextProps } from '../Text'

export const LinkTextContainer = styled('p')<TextProps>`
  ${({
    color,
    weight = 'medium',
    size = 'xsmall',
    maxWidth = '100%',
    mobileSize = size,
    theme,
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
    max-width: ${maxWidth};
    line-height: 135%;

    @media (max-width: 1000px) {
      font-size: ${theme.font.sizes[mobileSize]};
    }
  `}
`
