import { FC } from "react"
import { TaskStatusType } from "../../interfaces"
import { OptionMenu } from "./OptionMenu"



export const InProgressButton: FC<{ onChange: (value: TaskStatusType) => void }> = ({ onChange }) => {
    return (
        <>
            <div className="c-cell">

                In Progress <span className="c-p-blue"></span>
            </div>
            <div className="c-cell">

                <OptionMenu onChange={onChange} status={'in-progress'}></OptionMenu>
            </div>
        </>
    )
}