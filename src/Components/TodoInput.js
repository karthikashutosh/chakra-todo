import React from "react";
import { useToast } from "@chakra-ui/toast";
import { Input, Button, HStack } from "@chakra-ui/react";

export default function TodoInput({ createTodoItem }) {
  const [value, setValue] = React.useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      toast({
        title: "Error! Add items",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    createTodoItem(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack spacing="5">
        <Input
          mt="5"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          variant="flushed"
          placeholder="Add items"
          value={value}
        />
        <Button mt="12" size="lg" colorScheme="purple" variant="ghost" type="submit">
          Add
        </Button>
      </HStack>
    </form>
  );
}
