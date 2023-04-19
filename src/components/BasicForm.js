import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../redux/ActionTypes';

const BasicForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={(values) => {
          dispatch({
            type: ActionTypes.ADD_TODO,
            payload: values?.todo
          })
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="todo" placeholder="TextHere" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
};

export default BasicForm
