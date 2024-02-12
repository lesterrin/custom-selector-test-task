import React, {FC} from "react";
import CustomSelectorItem from "../customSelectorItem/customSelectorItem";
import {SelectSectionType} from "../types";

const SelectSection: FC<SelectSectionType> = ({itemsList, checkedItem, checkItem}) => {
    const customSelectorItemList = Array.from(itemsList).map(element => {
        let isChecked = false;

        if (checkedItem === element) isChecked = true;

        return <CustomSelectorItem
            element={element}
            isChecked={isChecked}
            checkItem={() => checkItem(element)}
        />
    });

    return (
        <div
            className="border border-gray-300 text-gray-900 py-1 rounded-md mt-1"
        >{customSelectorItemList}</div>
    )

}

export default SelectSection;