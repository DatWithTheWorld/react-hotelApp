import React from "react";
import { Table, Heading, Box, Button} from "@chakra-ui/react";

const Guests: React.FC = () => (
  <Box ml="250px" p={8}>
    <Heading mb={6}>Guests</Heading>
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Email</Table.ColumnHeader>
          <Table.ColumnHeader>Phone</Table.ColumnHeader>
          <Table.ColumnHeader>Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.ColumnHeader>John Doe</Table.ColumnHeader>
          <Table.ColumnHeader>john.doe@example.com</Table.ColumnHeader>
          <Table.ColumnHeader>+123456789</Table.ColumnHeader>
          <Table.ColumnHeader>
            <Button size="sm" colorScheme="blue">
              Edit
            </Button>
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  </Box>
);

export default Guests;
