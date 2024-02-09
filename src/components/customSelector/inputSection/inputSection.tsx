import React, {FC, useId} from "react";
import SelectArrows from "../../svgComponents/selectArrows";
import Trash from "../../svgComponents/trash";
import {InputSectionType} from "../types";

const InputSection: FC<InputSectionType> = ({
                                                inputValue, itemsList, checkedItemKey,
                                                showList, onInputChangeHandler, handleKeyDown, deleteItem
                                            }) => {

    const id = useId();
    const checkedItem = checkedItemKey !== null ? itemsList[checkedItemKey] : null;

    return (
        <div>
            <label htmlFor={id}><b>Группа разработки:</b></label>
            <div className="relative">
                <input id={id}
                       placeholder={"укажите название"}
                       type="text"
                       value={inputValue}
                       onClick={showList}
                       onChange={onInputChangeHandler}
                       onKeyDown={handleKeyDown}
                       className="border border-gray-300 rounded-md w-full p-2"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex">
                    {checkedItem && itemsList.length > 1 &&
                    <button onClick={deleteItem}>
                        <Trash/>
                    </button>
                    }
                    <span><SelectArrows/></span>
                </div>
            </div>
        </div>
    )
}

export default InputSection;