import React, {useEffect, useRef, useState} from "react";
import SelectSection from "./selectSection/selectSection";
import InputSection from "./inputSection/inputSection";

const CustomSelector = () => {

    const wrapRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: MouseEvent) => {
        if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
            setIsListShowed(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, []);


    const [itemsList, setItemsList] = useState<Set<string>>(new Set());
    const [inputValue, setInputValue] = useState('');
    const [checkedItem, setCheckedItem] = useState<string>('');
    const [isListShowed, setIsListShowed] = useState(false);

    const deleteItem = (item: string) => {
        let newItemsListList = new Set(itemsList);
        newItemsListList.delete(item)
        setItemsList(newItemsListList);

        if (checkedItem === item) setInputValue('');

        setCheckedItem('');
    }

    const checkItem = (item: string) => {
        setCheckedItem(item);
        setInputValue(item);
    }

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue) {
            let newItemsListList = new Set(itemsList);
            newItemsListList.add(inputValue);
            setItemsList(newItemsListList);
            setCheckedItem('');
            setInputValue('');
        }
    }

    return (
        <div ref={wrapRef}>
            <InputSection
                inputValue={inputValue}
                itemsList={itemsList}
                checkedItem={checkedItem}
                deleteItem={() => deleteItem(checkedItem)}
                onInputChangeHandler={onInputChangeHandler}
                handleKeyDown={handleKeyDown}
                showList={() => setIsListShowed(true)}
            />
            {isListShowed && itemsList.size > 0 &&
            <SelectSection itemsList={itemsList}
                           checkedItem={checkedItem}
                           checkItem={checkItem}/>}

        </div>)
}

export default CustomSelector;