import { FC, useState } from "react";
import Item from "./Item";
import { ITask, TaskListType, TaskStatusType } from "./interfaces";
interface ListProps {
  initialItems: TaskListType;
}
export const List: FC<ListProps> = ({ initialItems }) => {
  const [items, setItems] = useState<ITask[]>(initialItems);

  const handleOnDelete = (i: ITask) => {
    const clone = [...items];
    const index = clone.findIndex((e) => e.id === i.id);
    clone.splice(index, 1);
    setItems(clone);
  };

  const handleOnStatusChange = (status: TaskStatusType, id: number) => {
    const clone = [...items];
    const index = clone.findIndex((e) => e.id === id);
    clone[index].status = status
    setItems(clone);
  }



  return (
    <ul className="c-list">
      {items.map((item, index) => (
        <Item key={index} item={item} onDelete={handleOnDelete} onStatusChange={handleOnStatusChange}></Item>
      ))}
    </ul>
  );
};
