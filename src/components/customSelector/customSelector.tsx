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


    const [itemsList, setItemsList] = useState<Array<string>>([]);
    const [inputValue, setInputValue] = useState('');
    const [checkedItemKey, setCheckedItemKey] = useState<number | null>(null);
    const [isListShowed, setIsListShowed] = useState(false);

    const deleteItem = (key: number | null) => {
        if (key !== null && checkedItemKey !== null) {
            let newItemsListList = [...itemsList];
            newItemsListList.splice(checkedItemKey, 1)
            setItemsList(newItemsListList);
            if (checkedItemKey === key) setInputValue('');
            setCheckedItemKey(null);
        }
    }

    const checkItem = (key: number | null) => {
        if (key !== null) {
            setCheckedItemKey(key);
            setInputValue(itemsList[key]);
        }
    }

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue && !itemsList.includes(inputValue)) {
            let newItemsListList = [...itemsList, inputValue];
            setItemsList(newItemsListList);
            setCheckedItemKey(null);
            setInputValue('');
        }
    }

    return (
        <div ref={wrapRef}>
            <InputSection
                inputValue={inputValue}
                itemsList={itemsList}
                checkedItemKey={checkedItemKey}
                deleteItem={() => deleteItem(checkedItemKey)}
                onInputChangeHandler={onInputChangeHandler}
                handleKeyDown={handleKeyDown}
                showList={() => setIsListShowed(true)}
            />
            {isListShowed && itemsList.length > 0 &&
            <SelectSection itemsList={itemsList}
                           checkedItemKey={checkedItemKey}
                           checkItem={checkItem}/>}

        </div>)
}

export default CustomSelector;