import Image from 'next/image'
import React, { useState } from 'react'

import { DesktopNavbar } from '@components/molecules/DesktopNavbar'
import { MobileNavbar } from '@components/molecules/MobileNavbar'

import { HeaderArea, HeaderContainer, IconHamburger } from './styles'

import logo from '@assets/logo.svg'
import { Turn as Hamburger } from 'hamburger-react'

export const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderArea className="container-content">
        <Image src={logo} width={130} height={24} alt="Logo escrito beVoltz" />

        <DesktopNavbar />
        <IconHamburger>
          <Hamburger direction="left" toggled={isOpen} toggle={setOpen} />
        </IconHamburger>
      </HeaderArea>

      <MobileNavbar isOpen={isOpen} />
    </HeaderContainer>
  )
}
