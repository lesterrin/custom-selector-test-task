import React, {FC} from "react";
import CustomSelectorItem from "../customSelectorItem/customSelectorItem";
import {SelectSectionType} from "../types";

const SelectSection: FC<SelectSectionType> = ({itemsList, checkedItemKey, checkItem}) => {
    const customSelectorItemList = itemsList.map((element, i) => {
        let isChecked = false;

        if (checkedItemKey === i) isChecked = true;

        return <CustomSelectorItem
            key={element}
            element={element}
            isChecked={isChecked}
            checkItem={() => checkItem(i)}
        />
    });

    return (
        <div
            className="border border-gray-300 text-gray-900 py-1 rounded-md mt-1"
        >{customSelectorItemList}</div>
    )

}

export default SelectSection;