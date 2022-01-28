import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { MainContainer } from '../../components/MainContainer';
import { PrimaryButton } from '../../components/PrimaryButton';
import FormStore from '../../store/FormStore';


interface IUseForm{
  register: any,
  handleSubmit: any,
  formState: any
}

const SecondStepPage = observer(() => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    mode: "onBlur",
  })

  
  const history = useHistory()
  
  const onSubmit = (data: any) => {
    FormStore.setData(data);
    history.push('/step3')
    console.log(FormStore.data)
  }

  const hasPhone = watch("hasPhone")

  const normalPhoneNumber = (value: string) => {
    const newValue = "+" + value
    const phoneNumber = parsePhoneNumberFromString(newValue);
    if(!phoneNumber) {
      return value
    }

    return (phoneNumber.formatInternational())
  }

  return (
    <MainContainer >
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Input 
        {...register('email')}
        id="email" 
        type="email" 
        label="Email" 
        name="email" 
        />
        {/* <Input 
        ref={register('lastName')} 
        id="lastName" 
        type="text" 
        label="Last Name" 
        name="lastName" /> */}
        <FormControlLabel  
        label="has Phone?"
        control={
        <Checkbox 
        {...register("hasPhone")}
        name="hasPhone"
        color="primary"  
        />}/>
        {hasPhone && 
        <Input
        {...register("phone")} 
        id="phone"
        type="tel"
        label="Phone"
        name="phone"
        onChange={(e)=>
        e.target.value = normalPhoneNumber(e.target.value)
        }
        />
        }
        <PrimaryButton>
          Next
        </PrimaryButton>
      </Form>
    </MainContainer>
  );
})

export default SecondStepPage;
