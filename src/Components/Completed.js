import React from "react";
import { Text, VStack } from "@chakra-ui/react";

function Completed({ complete }) {
  return (
    <div>
      <VStack>
        <Text>{complete.todo}</Text>
      </VStack>
    </div>
  );
}

export default Completed;
