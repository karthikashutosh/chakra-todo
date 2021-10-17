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
import { FcCheckmark } from "react-icons/fc";

export default function TodoItem({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) {
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
          <IconButton
            icon={<FcCheckmark />}
            mt="8"
            onClick={() => completeTodoItem(index)}
          />
          <Flex p={6} w="300px" h="10px" justifyContent="space-around">
            <Text as={item.complete ? "s" : ""} fontSize="xl">
              {item.todo}
            </Text>
            <Spacer p={3} />
            <IconButton
              onClick={() => updateTodoItem(index)}
              icon={<FaEdit />}
              isRound="true"
            />
            <Spacer p={3} />
            <IconButton
              icon={<FaTrash />}
              isRound="true"
              onClick={() => deleteTodoItem(index)}
            />
          </Flex>
        </HStack>
      </VStack>
    </div>
  );
}
