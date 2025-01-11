import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Header: React.FC = () => (
  <Box bg="blue.500" color="white" p={4} mb={6}>
    <Text fontSize="lg" fontWeight="bold">
      My App
    </Text>
  </Box>
);

export default Header;
