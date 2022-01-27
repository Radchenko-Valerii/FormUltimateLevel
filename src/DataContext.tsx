import { observer } from "mobx-react-lite";
import React, { createContext, useContext } from "react";
import FormState from "./store/FormStore";
import { IDataContext } from "./types/types";



const DataContext = createContext<IDataContext | null>({});

export const DataProvider = observer(({ children }: any) => {

  const setValues = (values: any) => {
    FormState.setData(values)
  }

  return <DataContext.Provider value={FormState}>{children}</DataContext.Provider>

})

export const useData = () => useContext(DataContext)
