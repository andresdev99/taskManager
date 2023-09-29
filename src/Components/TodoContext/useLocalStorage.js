import { React, useState, useEffect } from 'react'

const useLocalStorage = (itemName, defaultValue) => {

    const [items, setItem] = useState(defaultValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        // Simulate loading message
        setTimeout(() => {
            try {
                const parsedItems = JSON.parse(localStorage.getItem(itemName));
                let currentItems;
                // If there is no data then set one as defeault
                if (!parsedItems || parsedItems.length < 1) {
                    const stringItems = JSON.stringify(defaultValue);
                    localStorage.setItem(itemName, stringItems);
                    currentItems = defaultValue;
                } else {
                    currentItems = parsedItems;
                    setItem(currentItems);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error)
            }
        }, 3000);
        
    }, [])

    const setItemToLocalStorage = (newItem) => {
        if (newItem) {
            // Creating new todos based on the last ones and adding the new one
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        }
    }

    return {
        items,
        setItemToLocalStorage,
        loading,
        error
    };
}


export { useLocalStorage }
