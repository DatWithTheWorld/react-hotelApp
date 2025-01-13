import React, { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/public/Sidebar";
import Header from "../components/public/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction={"row"} w={'100%'} height={"100%"}>
      <Sidebar />

      <Box flex="1" w={"full"} >
        <Header  />
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
