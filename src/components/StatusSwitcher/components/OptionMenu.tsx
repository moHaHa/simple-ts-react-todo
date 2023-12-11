import { FC } from "react"
import { TaskStatusType } from "../../interfaces"


interface OptionMenuProps {
    status: TaskStatusType
    onChange: (value: TaskStatusType) => void
}
export const OptionMenu: FC<OptionMenuProps> = ({ status, onChange }) => {

    const canSetTodo = Boolean(status === 'in-progress' || status === 'todo')
    const canSetInP = Boolean(status === 'todo' || status === 'in-progress')
    const canSetDone = Boolean(status === 'in-progress' || status === 'done')
    return (
        <>
            {/* 
            we set  (as TaskStatusType) here , because we know that only value of this type will got from change this select , so I force it to accept it 
            */}
            <select onChange={(e) => onChange(e.target.value as TaskStatusType)} value={status} style={{ width: '100px' }} >
                {canSetTodo &&
                    <option value='todo' label="Todo"></option>
                }
                {canSetInP &&
                    <option value='in-progress' label="In Progress"></option>
                }
                {canSetDone &&
                    <option value='done' label="Done"></option>
                }
            </select>
        </>
    )
}