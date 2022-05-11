import { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItems;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItems = initialValue;
                } else {
                    parsedItems = JSON.parse(localStorageItem);
                }

                setItem(parsedItems);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }, 3000);
    })

    const saveItem = (newItem) => {
        try {
            const stringifiedItems = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItems);
            setItem(newItem);
        } catch (error) {
            setError(error)
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
    }


}

export { useLocalStorage };