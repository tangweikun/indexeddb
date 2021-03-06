import { useLiveQuery } from "dexie-react-hooks";
import { TodoList } from "../models/TodoList";
import { db } from "../models/db";
import { TodoItemView } from "./TodoItemView";
import { AddTodoItem } from "./AddTodoItem";

interface Props {
  todoList: TodoList;
}

export function TodoListView({ todoList }: Props) {
  const items = useLiveQuery(
    () => db.todoItems.where({ todoListId: todoList.id }).toArray(),
    [todoList.id]
  );

  if (!items) return null;

  return (
    <div>
      <div className="flex">
        <h2 className="mr-8">{todoList.title}</h2>
        <div className="todo-list-trash">
          <a onClick={() => db.deleteList(todoList.id)} title="Delete list">
            删除
          </a>
        </div>
      </div>
      <div>
        {items.map((item) => (
          <TodoItemView key={item.id} item={item} />
        ))}
      </div>
      <div>
        <AddTodoItem todoList={todoList} />
      </div>
    </div>
  );
}
