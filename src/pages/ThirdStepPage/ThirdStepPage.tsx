import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import FileDrop from '../../components/FileDrop';
import { Form } from '../../components/Form';
import { MainContainer } from '../../components/MainContainer';

const ThirdStepPage = () => {
  const {control, handleSubmit} = useForm()

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 3
      </Typography>
      <Form>
        <FileDrop name="files" control={control} />
      </Form>
    </MainContainer>
  );
}

export default ThirdStepPage;