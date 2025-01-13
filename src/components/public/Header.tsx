import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useHeaderLogic } from "../../hooks/header/useHeaderLogic";
import { icSearch } from "../../assets/icons";


const Header: React.FC = () => {
  const {path} = useHeaderLogic();
  return (
    <Flex direction={"column"}
    align={"flex-start"}
    >
      <Flex align={"center"} padding={"8px 16px"} backgroundColor={'#F7F9FC'} border={'1px solid #EEF0F2'} borderRadius={'5px'}>
      <Box>
        <img src={icSearch} alt="search" width={"16px"} height={"16px"}/>
      </Box>
      <Input placeholder="Search for rooms and offers" w="350px" outline={"none"} border={"none"} fontSize={"16px"} height={'fit-content'}/>
      </Flex>
      <Text fontSize="12px" marginTop={'30px'} fontWeight="bold" color={'#858D9D'}>
      {path}
      </Text>
    </Flex>
  );
};

export default Header;
