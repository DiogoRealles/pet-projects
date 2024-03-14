import styled, { css } from 'styled-components'

export const HeaderContainer = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background: linear-gradient(100.83deg, #f7f9f8 6.32%, #edeef0 71.74%);
    padding-top: 80px;
    padding-bottom: 40px;

    display: flex;
    flex-direction: column;
  `}
`

export const HeaderArea = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;
`

export const IconHamburger = styled('div')`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
  }
`
