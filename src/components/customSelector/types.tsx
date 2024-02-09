import React from "react";

export type InputSectionType = {
    inputValue: string,
    checkedItemKey: number | null,
    itemsList: Array<string>,
    deleteItem: () => void,
    showList: () => void,
    onInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export type SelectSectionType = {
    itemsList: Array<string>
    checkedItemKey: number | null,
    checkItem: (element: number) => void
}

export type CustomSelectorItemType = {
    element: string,
    isChecked: boolean,
    checkItem: () => void
}