import { createContext, useCallback, useContext, useState} from 'react';
import React from 'react';

/* interface the date context props*/
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: ()=> void;
}

/* interface*/
interface IAppDrawerProviderProps {
    children: React.ReactNode
}


const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () =>{
  return useContext(DrawerContext);
};

export const AppDrawerProvider: React.FC<IAppDrawerProviderProps>=({children}) => {
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(()=>{
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  },[]);

  return (
    <DrawerContext.Provider value={{isDrawerOpen,toggleDrawerOpen}}>
      {children}
    </DrawerContext.Provider>
  );
};
