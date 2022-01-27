import React, { FC, forwardRef } from "react";
import { TextField } from "@mui/material";
import { IInput } from "../types/types";


export const Input: FC<IInput> = forwardRef((props, ref) => {

  return (<TextField 
    fullWidth 
    variant="outlined" 
    margin="normal" 
    inputRef={ref}
    // ref={ref} 
    {...props} 
    />)
})