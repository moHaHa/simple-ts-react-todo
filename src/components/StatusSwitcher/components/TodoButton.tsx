import { FC } from "react"
import { TaskStatusType } from "../../interfaces"
import { OptionMenu } from "./OptionMenu"

export const TodoButton: FC<{ onChange: (value: TaskStatusType) => void }> = ({ onChange }) => {
    return (
        <>
            <div className="c-cell">
                To do <span className="c-p-gray"></span>
            </div>
            <div className="c-cell">
                <OptionMenu onChange={onChange} status="todo"></OptionMenu>
            </div>
        </>
    )
}