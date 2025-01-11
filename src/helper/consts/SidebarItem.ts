import { icDeal, icGuest, icRate, icRoom } from "../../assets/icons";
import { SidebarItem } from "../../Interface/SidebarItem";

const sidebarItems: SidebarItem[] = [
    {
        name: 'Guests',
        icons:icGuest,
        link: "/"
    },
    {
        name: 'Room',
        icons: icRoom,
        link: "/room"
    },
    {
        name: 'Deal',
        icons: icDeal,
        link: "/deal"
    },
    {
        name: 'Rate',
        icons: icRate,
        link: "/rate"
    }
]

export default sidebarItems;