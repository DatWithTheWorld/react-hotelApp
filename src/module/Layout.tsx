import React, { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/public/Sidebar";
import { Header } from "../stories/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction={"row"} height={"100%"}>
      <Sidebar />

      <Box flex="1" ml="250px" p={8}>
        <Header />
        
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
