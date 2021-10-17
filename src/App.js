import React from "react";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import { VStack, Heading, Badge } from "@chakra-ui/react";

function App() {
  const [todoItems, setTodoItems] = React.useState(
    () => JSON.parse(localStorage.getItem("todoItems")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  // completed item
  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];

    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  //update item
  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}`, item.todo);
    let todoObj = { todo: newItem, complete: false };

    newTodoItems.splice(index, 1, todoObj);

    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };

  //delete item
  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  //create todo item
  const createTodoItem = (todo) => {
    const newTodo = [...todoItems, { todo, complete: false }];

    setTodoItems(newTodo);
  };

  

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

        <TodoInput createTodoItem={createTodoItem} />
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            item={item}
            deleteTodoItem={deleteTodoItem}
            completeTodoItem={completeTodoItem}
            updateTodoItem={updateTodoItem}
          />
        ))}
      </VStack>
    </div>
  );
}

export default App;
