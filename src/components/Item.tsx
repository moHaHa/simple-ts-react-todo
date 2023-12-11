import { FC } from "react";
import { StatusSwitcher } from "./StatusSwitcher/StatusSwitcher";
import { ITask, TaskStatusType } from "./interfaces";
interface ItemProps {
  item: ITask;
  onDelete?: (item: ITask) => void;
  onStatusChange?: (status: TaskStatusType, taskId: number) => void
}

const Item: FC<ItemProps> = ({ item, onDelete, onStatusChange }) => {
  return (
    <>
      <li className="c-item">
        <div className="c-cell">{item.id}</div>
        <div className="c-cell">{item.name}</div>
        <StatusSwitcher onChange={(e) => onStatusChange?.(e, item.id)} status={item.status}></StatusSwitcher>
        <button onClick={() => onDelete?.(item)}>delete</button>
      </li>
    </>
  );
};

export default Item;
