"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from 'next/link';
import { cn } from "@/utils/cn";


function Navbar({ className }) {
  const [active, setActive] = useState()
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Web Development</HoveredLink>
            <HoveredLink href="/">Interface Design</HoveredLink>
            <HoveredLink href="/">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>

          </div>
        </MenuItem><Link href="/contact-us" className="text-black hover:opacity-[0.9] dark:text-white">
          <MenuItem setActive={setActive} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">

            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar