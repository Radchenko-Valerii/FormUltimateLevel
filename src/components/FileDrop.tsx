import { List, Paper } from "@mui/material";
import React from "react"
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

// type FormValues = {
//   ReactDatepicker: string;
// } 

const FileDrop = ({control, name}:any) => {
  
  return (
  <Controller
  control={control}
  name={name}
  defaultValue={[]}
  render={({
    field: { onChange, onBlur, value }
  })=>{return <>
    <Dropzone onDrop={onChange}>
    {({ getRootProps, getInputProps})=>{
      return (
      <Paper>
        {...getRootProps()}
      </Paper>)
    }}
    </Dropzone>
    <List />
    </>
  }}
  />
    );
}


export default FileDrop;