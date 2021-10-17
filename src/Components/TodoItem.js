import {
  VStack,
  Text,
  StackDivider,
  HStack,
  Spacer,
  IconButton,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TodoItem({ item, index, deleteTodoItem }) {
  return (
    <div>
      <VStack
        divider={<StackDivider />}
        p="4"
        alignSelf="stretch"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      >
        <HStack spacing="12px" w="auto">
          <Checkbox mt="8" />
          <Flex p={6} w="300px" h="50px" justifyContent="space-between">
            <Text fontSize="xl">{item.todo}</Text>
            <Spacer p={3} />
            <Flex w="10px" />

            <IconButton icon={<FaEdit />} isRound="true" />
            <Spacer p={2} />
            <IconButton
              icon={<FaTrash />}
              onClick={() => deleteTodoItem(index)}
              isRound="true"
            />
          </Flex>
        </HStack>
      </VStack>
    </div>
  );
}
