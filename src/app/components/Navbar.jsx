import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
//import './navbar.css';

export const  NavbarNJS =() => {
  return (
    <Navbar className="bg-black-900 text-white" isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-black text-xl">Portafolio Mauricio Espinoza</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3" justify="center">
          <NavbarItem>
            <Link className="mr-4 text-black text-lg" href="#aboutId">
              Acerca de Mi
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#skillsId" aria-current="page"  className="mr-4 text-black text-lg">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="secondary" href="#proyectosId"  className="mr-4 text-black text-lg">
              Proyectos
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
//     <div className="nav-container">
//     <div className="logo">
//         <Link href="/">
//             Portafolio Mauricio Espinoza
//         </Link>
//         <Link color="#000000" href="#proyectosId">
//               Proyectos
//        </Link>
//     </div>
//     <a href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing" className="cta-btn">Resume</a>
// </div>


  );
}
