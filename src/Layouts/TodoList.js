import React, { useState } from "react";
import { Image, List } from "semantic-ui-react";

const TodoList = () => {
  const [todos, addTodo] = useState(["Fenebahce"]);

  return (
    <List divided verticalAlign="middle">
      {todos.map(todo => {
        return (
          <List.Item>
            <Image
              avatar
              src="data:image/jpeg;base64,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"
            />
            <List.Content>
              <List.Header as="a">{todo}</List.Header>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};

export default TodoList;
