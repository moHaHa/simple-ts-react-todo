import React from "react";
import { TaskStatusType } from "../interfaces";
import { DoneButton } from "./components/DoneButton";
import { InProgressButton } from "./components/InProgressButton";
import { TodoButton } from "./components/TodoButton";

interface StatusSwitcherProps {
    status: TaskStatusType
    onChange: (status: TaskStatusType) => void
}
export const StatusSwitcher: React.FC<StatusSwitcherProps> = (props) => {


    switch (props.status) {
        case 'todo':
            return <TodoButton onChange={props.onChange}></TodoButton>
        case 'in-progress':
            return <InProgressButton onChange={props.onChange}></InProgressButton>
        case 'done':
            return <DoneButton onChange={props.onChange}></DoneButton>
        default:
            return <></>
    }


}