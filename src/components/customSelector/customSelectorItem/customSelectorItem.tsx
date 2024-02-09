import React, {FC} from "react";
import CheckMark from "../../svgComponents/checkMark";
import {CustomSelectorItemType} from "../types";

const CustomSelectorItem: FC<CustomSelectorItemType> = ({element, checkItem, isChecked}) => {
    return (
        <div
            className="relative p-2 hover:bg-sky-300"
            onClick={checkItem}>
            <div>{element}</div>
            {isChecked && <div className="absolute right-2 top-1/2 transform -translate-y-1/2"><CheckMark/></div>}
        </div>
    )
}

export default CustomSelectorItem;