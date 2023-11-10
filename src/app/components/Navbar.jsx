import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import './navbar.css';

export const  NavbarNJS =() => {
  return (
    <Navbar className="navbar-container" isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">Portafolio Mauricio Espinoza</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="secondary" href="#aboutId">
              Acerca de Mi
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#skillsId" aria-current="page" color="secondary">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="secondary" href="#proyectosId">
              Proyectos
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>



  );
}
