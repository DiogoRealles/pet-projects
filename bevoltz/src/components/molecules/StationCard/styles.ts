import styled, { css } from 'styled-components'

export const StationCardContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 125px;
    background-color: ${theme.colors.gray_50};
    border-radius: ${theme.border.radius.small};
    flex-shrink: 0;
    padding: 20px;
    gap: 10px;
  `}
`

export const StationName = styled('div')`
  background-color: red;
`

export const StationCategory = styled('div')`
  display: flex;
  gap: 5px;
`

export const StationData = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
