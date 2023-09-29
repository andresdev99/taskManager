import { React, useState, useEffect } from 'react'

const useLocalStorage = (itemName, defaultValue) => {

    const getStoragedItems = () => {

        const parsedItems = JSON.parse(localStorage.getItem(itemName));

        // If there is no data then set one as defeault
        if (!parsedItems || parsedItems.length < 1) {
            const stringItems = JSON.stringify(defaultValue);
            localStorage.setItem(itemName, stringItems);
            return defaultValue;
        }
        return parsedItems;
    }

    const [items, setItem] = useState(getStoragedItems())

    const setItemToLocalStorage = (newItem) => {
        if (newItem) {
            // Creating new todos based on the last ones and adding the new one
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        }
    }

    return [items, setItemToLocalStorage, getStoragedItems];
}


export { useLocalStorage }
