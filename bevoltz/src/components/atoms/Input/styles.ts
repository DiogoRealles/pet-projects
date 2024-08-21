import styled, { css } from 'styled-components'

export const SelectInputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const SelectInputLabel = styled('label')`
  ${({ theme }) => css`
    color: red;
  `}
`

export const Select = styled('select')`
  ${({ theme }) => css`
    background-color: red;
    width: 258px;
    height: 42px;
    border-radius: ${theme.border.radius.small};
    border: none;
    padding: 0px 10px;
    background-color: ${theme.colors.gray_30};

    color: ${theme.colors.gray_100};
  `}
`
