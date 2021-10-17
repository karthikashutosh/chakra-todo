import React from "react";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import { VStack, Heading } from "@chakra-ui/react";

function App() {
  const [todoItems, setTodoItems] = React.useState([
    {
      todo: "wallking on the beach",
      complete: false,
    },
    {
      todo: "Do noting",
      complete: false,
    },
    {
      todo: "Make lassi",
      complete: false,
    },
  ]);
  return (
    <div className="App">
      <VStack p={8}>
        <Heading
          mb="8"
          fontWeight="extrabold"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Chakra-Todo
        </Heading>

        <TodoInput />
        {todoItems.map((item, index) => (
          <TodoItem key={index} index={index} item={item} />
        ))}
      </VStack>
    </div>
  );
}

export default App;
