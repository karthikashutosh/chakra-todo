import {
  VStack,
  Text,
  StackDivider,
  HStack,
  Spacer,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TodoItem({ item, index }) {
  return (
    <div>
      <VStack
        divider={<StackDivider />}
        p="4"
        borderRadius="lg"
        alignItems="stretch"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      >
        <HStack>
          <Checkbox alignSelf="stretch" />
          <Text fontSize="xl">{item.todo}</Text>
          <Spacer p={2} />
          <IconButton icon={<FaEdit />} isRound="true" />
          <IconButton icon={<FaTrash />} isRound="true" />
        </HStack>
      </VStack>
    </div>
  );
}
