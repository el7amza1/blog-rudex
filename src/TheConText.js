import { createContext,useState } from 'react';
const themes ={
    light: {
        background: '#fff',
        color: '#343434'
    },
    dark :{
        background: '#343434',
        color: '#fff'
    }
}

export const NameContext = createContext();

export const TheContextProvider = ({ children }) => {
    const [theme , setTheme] = useState(themes.light)
    const [currentTheme , setCurrentTheme] = useState('light')
    
        const switchTheme = ()=>{
            if (theme === themes.light){
                setTheme(themes.dark)
                setCurrentTheme("dark")
            } else{
                setTheme(themes.light)
                setCurrentTheme("light")
            }
        } 
    // const [thems, setThems] = useState("info")
    return (
        <NameContext.Provider value={{ theme ,currentTheme ,switchTheme }}>
            {children}
        </NameContext.Provider>
    );
};
