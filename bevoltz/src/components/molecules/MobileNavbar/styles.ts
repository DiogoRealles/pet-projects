import styled, { css } from 'styled-components'

export const NavbarContainer = styled('div')`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

export const MenuContainer = styled('ul')`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 1.8rem;
    padding: 32px 32px 0px 32px;
  `}
`

export const MenuItem = styled('li')`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.4rem;
    border-radius: ${theme.border.radius.small};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.white};
    }
  `}
`
