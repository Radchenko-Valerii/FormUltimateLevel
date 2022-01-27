import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { MainContainer } from '../../components/MainContainer';
import { PrimaryButton } from '../../components/PrimaryButton';


interface IUseForm{
  register: any,
  handleSubmit: any,
  formState: any
}

const FirstStepPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
  })

  
  const history = useHistory()
  
  const onSubmit = (data: any) => {
    console.log(data)
    history.push('/step2')
    
  }

  return (
    <MainContainer >
      <Typography component="h2" variant="h5">
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Input 
        {...register('firstName')}
        id="firstName" 
        type="text" 
        label="First Name" 
        name="firstName" />
        <Input 
        {...register('lastName')} 
        id="lastName" 
        type="text" 
        label="Last Name" 
        name="lastName" />
        <PrimaryButton>
          Next
        </PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default FirstStepPage;