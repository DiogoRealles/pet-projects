"use client";

import {
  BsInstagram,
  BsLinkedin,
  BsList,
  BsX,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Logo, LogoDark } from "../../../public/assets/img/Index";
import ItemMenu from "./ItemMenu";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Button from "@/components/Button/Index";

const Index = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header
      data-header="home"
      className="border-t-4 border-orange-mrbarber-400 bg-mrbarber-hero bg-no-repeat bg-cover bg-center pt-60"
    >
      <div className="bg-gradient-to-b from-transparent to-neutral-950">
        <nav className="border-b-4 border-orange-mrbarber-400 fixed top-0 lef-0 w-full bg-black z-10 px-4 flex items-center justify-between md:block">
          <div className="container mx-auto">
            {/* MENU DESKTOP */}
            <div className="flex justify-between items-center py-2">
              <div className="relative w-32 h-20">
                <Link href="/">
                  <Image
                    className="object-contain"
                    src={Logo}
                    fill
                    alt="Logo Mr Barber"
                  />
                </Link>
              </div>

              <ul className="hidden md:flex gap-2">
                {NAV_LINKS.map((menu) => (
                  <ItemMenu key={menu.key} link={menu.key} label={menu.label} />
                ))}
              </ul>
            </div>
          </div>

          {/* MENU MOBILE */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <BsList className="w-8 h-8 text-orange-mrbarber-400" />
          </div>
          <div
            className={
              openMenu
                ? "fixed z-10 top-0 left-0 md:hidden bg-white h-screen w-[55%]  p-10 ease-in-out duration-500"
                : "fixed top-0 left-[-100%] h-screen p-10 ease-in-out duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <div className="cursor-pointer">
                <BsX
                  className="w-8 h-8 text-orange-mrbarber-400"
                  onClick={toggleMenu}
                />
              </div>
            </div>
            {/* MENU MOBILE LINKS */}
            <div className="flex-col gap-4">
              <ul className="text-black flex flex-col gap-4">
                {NAV_LINKS.map((menu) => (
                  <ItemMenu
                    key={menu.key}
                    link={menu.key}
                    label={menu.label}
                    event={setOpenMenu}
                  />
                ))}
              </ul>
            </div>
            <div className="flex gap-8 py-10">
              <Link href="https://youtube.com/" target="_blank">
                <BsYoutube className="text-black text-2xl hover:text-orange-mrbarber-400 transition-all duration-300 font-semibold" />
              </Link>
              <Link href="https://instagram.com/" target="_blank">
                <BsInstagram className="text-black text-2xl hover:text-orange-mrbarber-400 transition-all duration-300 font-semibold" />
              </Link>
              <Link href="https://linkedin.com/" target="_blank">
                <BsLinkedin className="text-black text-2xl hover:text-orange-mrbarber-400 transition-all duration-300 font-semibold" />
              </Link>
            </div>

            <div className="relative w-32 h-20">
              <Link href="/">
                <Image
                  className="object-contain"
                  src={Logo}
                  fill
                  alt="Logo Mr Barber"
                />
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 md:px-0">
          <div className="py-40 md:pt-80 md:py-60 text-2xl">
            <p className="font-semibold font-sans">Muito mais que uma</p>
            <h1 className="font-heading text-6xl md:text-8xl text-orange-mrbarber-400 mb-10">
              barbearia
            </h1>
            <Button
              type="button"
              label="Agende seu horário"
              icon="➜"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
