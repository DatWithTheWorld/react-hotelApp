import React from "react";

export interface SidebarItem{
    name: string;
    icons: React.ReactNode;
    link: string;
}

export interface SidebarItemProps{
    sidebarItem: SidebarItem;
}