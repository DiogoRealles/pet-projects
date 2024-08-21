import { useState } from 'react'

import { LinkText } from '@components/atoms/LinkText'

import { MenuContainer, MenuItem, NavbarContainer } from './styles'

interface MobileNavbar {
  isOpen: boolean
}

export const MobileNavbar: React.FC<MobileNavbar> = ({ isOpen }) => {
  return (
    <NavbarContainer>
      {isOpen && (
        <MenuContainer>
          <MenuItem>
            <LinkText content="Inicio" href="item1" color="gray_200" />
          </MenuItem>
          <MenuItem>
            <LinkText content="Sobre" href="item1" color="gray_200" />
          </MenuItem>
          <MenuItem>
            <LinkText content="Aplicativo" href="item1" color="gray_200" />
          </MenuItem>
          <MenuItem>
            <LinkText content="Soluções" href="item1" color="gray_200" />
          </MenuItem>
          <MenuItem>
            <LinkText content="Contato" href="item1" color="gray_200" />
          </MenuItem>
        </MenuContainer>
      )}
    </NavbarContainer>
  )
}
