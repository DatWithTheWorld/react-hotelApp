import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import {ReactSVG} from "react-svg"
import { SidebarItemProps } from "../Interface/SidebarItem";


const SidebarItems: React.FC<SidebarItemProps> = ({sidebarItem}) => {
    return (
        <Link href={sidebarItem.link} alignItems={"flex-start"} color={'#5D6679'} marginBottom={"1rem"}  _hover={{color: '#1366D9 !important', backgroundColor: '#E8F1FD', borderRadius: '0.5rem'}} >
            <Flex padding={"0.5rem 1rem"} fontSize={"1rem"} color={'inherit'}  _hover={{color: '#1366D9 !important', cursor: 'pointer', fontWeight: '900'}} >
                <ReactSVG src={sidebarItem.icons as string}  style={{ color:'inherit' }}  className="fill-current" />
                 <Box  pl="10px" >{sidebarItem.name}</Box>
             </Flex>
        </Link>
    );
}

export default SidebarItems;