import { InsertDriveFile } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import React from "react"
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

type FormValues = {
  getRootProps: any;
} 

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
    {({ getRootProps, getInputProps} )=>{
      return (
      <Paper variant="outlined" {...getRootProps()}>
        <input {...getInputProps()} name={name} onBlur={onBlur}/>
        <p>Drop files here</p>
      </Paper>)
    }}
    </Dropzone>
    <List>
      {value.map((f: any, i: number)=>(
        <ListItem key={Date.now()}>
          <ListItemIcon>
            <InsertDriveFile/>
          </ListItemIcon>
          <ListItemText primary={f.name} secondary={f.size + " b"}/>
        </ListItem>
      ))}
    </List>
    </>
  }}
  />
    );
}


export default FileDrop;