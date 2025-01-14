// import createContext, useContext
import {createContext, useContext, useState} from 'react'
// create context
const ThemeContext = createContext()
//create a provider, pass children as it acts as HOC
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((theme)=>theme==='light'? 'dark': 'light')
    }
    return(
        // pass children to provider    
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
// custom hook
export const useTheme = () => {
    //return the context
    return useContext(ThemeContext)
}