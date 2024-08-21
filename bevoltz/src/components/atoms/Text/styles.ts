import styled from 'styled-components'
import { css } from 'styled-components'

import { TextProps } from '../Text'

export const TextContainer = styled('p')<TextProps>`
  ${({
    color,
    weight = 'medium',
    size = 'xsmall',
    maxWidth = '100%',
    mobileSize = size,
    lineHeight = '135',
    mobilePadding = false,
    align = 'start',
    theme,
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
    max-width: ${maxWidth};
    line-height: ${`${lineHeight}%`};

    text-align: ${align};

    @media (max-width: 1000px) {
      font-size: ${theme.font.sizes[mobileSize]};

      ${mobilePadding &&
      css`
        padding: 0px 22px;
      `}
    }
  `}
`
