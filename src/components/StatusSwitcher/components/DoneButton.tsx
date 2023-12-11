import { FC } from "react"
import { TaskStatusType } from "../../interfaces"
import { OptionMenu } from "./OptionMenu"

export const DoneButton: FC<{ onChange: (value: TaskStatusType) => void }> = ({ onChange }) => {
    return (
        <>
            <div className="c-cell">

                done <span className="c-p-green"></span>
            </div>
            <div className="c-cell">

                <OptionMenu onChange={onChange} status={'done'}></OptionMenu>
            </div>
        </>
    )
}