import { Box, Heading, TableRoot, TableHeader, TableBody, TableRow, TableColumnHeader, TableCell, Button } from "@chakra-ui/react";

const Guests = () => (
  <Box ml="250px" p={8}>
    <Heading mb={6}>Guests</Heading>
    <TableRoot variant={"line"}>
      <TableHeader>
        <TableRow>
          <TableColumnHeader>Name</TableColumnHeader>
          <TableColumnHeader>Email</TableColumnHeader>
          <TableColumnHeader>Phone</TableColumnHeader>
          <TableColumnHeader>Actions</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john.doe@example.com</TableCell>
          <TableCell>+123456789</TableCell>
          <TableCell>
            <Button size="sm" colorScheme="blue">
              Edit
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </TableRoot>
  </Box>
);

export default Guests;
