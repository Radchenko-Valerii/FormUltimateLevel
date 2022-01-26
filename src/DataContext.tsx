import { observer } from "mobx-react-lite";
import React, { createContext } from "react";
import FormState from "./store/FormState";

const DataContext = createContext({});

export const DataProvider = observer(({ children }: any) => {

  const setValues = (values: any) => {
    FormState.setData(values)
  }

  <DataContext.Provider value={FormState}></DataContext.Provider>

})