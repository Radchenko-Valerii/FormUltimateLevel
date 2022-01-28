import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import FileDrop from '../../components/FileDrop';
import { Form } from '../../components/Form';
import { MainContainer } from '../../components/MainContainer';
import {UserCard} from '../../components/UserCard';

const ThirdStepPage = () => {
  const {control, handleSubmit} = useForm()

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 3
      </Typography>
      <Typography component="h3" variant="h6">
        Check your inputs
      </Typography>
      <UserCard/>
      <Typography component="h3" variant="h6">
        You also may download avatar
      </Typography>
      <Form>
        <FileDrop name="files" control={control} />
      </Form>
    </MainContainer>
  );
}

export default ThirdStepPage;