"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

export function Header({ selectCategory }) {


  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Button onClick={() => selectCategory(19)} className="border-none" variant="outline">Bolas</Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button onClick={() => selectCategory(2)} className="border-none" variant="outline">Roupas</Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button onClick={() => selectCategory(4)} className="border-none" variant="outline">Sapatos</Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = (({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
