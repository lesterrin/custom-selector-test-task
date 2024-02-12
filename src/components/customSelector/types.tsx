import React from "react";

export type InputSectionType = {
    inputValue: string,
    checkedItem: string,
    itemsList: Set<string>,
    deleteItem: () => void,
    showList: () => void,
    onInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export type SelectSectionType = {
    itemsList: Set<string>
    checkedItem: string,
    checkItem: (element: string) => void
}

export type CustomSelectorItemType = {
    element: string,
    isChecked: boolean,
    checkItem: () => void
}