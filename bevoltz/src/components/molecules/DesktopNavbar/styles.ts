import styled from 'styled-components'

export const NavbarContainer = styled('div')`
  display: flex;
  gap: 30px;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const MenuContainer = styled('ul')`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 35px;
`

export const MenuItem = styled('li')``
