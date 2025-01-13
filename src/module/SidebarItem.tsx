import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {ReactSVG} from "react-svg"
import { SidebarItemProps } from "../Interface/SidebarItem";
import { Link } from "react-router-dom";


const SidebarItems: React.FC<SidebarItemProps> = ({sidebarItem}) => {
    return (
        <Link to={sidebarItem.link} style={{alignItems:'flex-start', marginBottom: '1rem'}} >
            <Flex padding={"0.5rem 1rem"} fontSize={"1rem"}  color={'#5D6679'}  _hover={{color: '#1366D9 !important', cursor: 'pointer', fontWeight: '900', backgroundColor: '#E8F1FD', borderRadius: '0.5rem'}} >
                <ReactSVG src={sidebarItem.icons as string}  style={{ color:'inherit' }}  className="fill-current" />
                 <Box  pl="10px" >{sidebarItem.name}</Box>
             </Flex>
        </Link>
    );
}

export default SidebarItems;