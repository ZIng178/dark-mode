import {useEffect} from 'react';
import {useLocalStorage} from "./useLocalStorage";


export const useDarkMode=(initialValues)=>{
    const [darkMode,setDarkMode]=useLocalStorage("darkmode", initialValues);
    useEffect(()=>{
        return (darkMode?document.body.classList.add("dark-mode"): 
        document.body.classList.remove("dark-mode")
        )
    },[darkMode])
    return[darkMode,setDarkMode]
}
