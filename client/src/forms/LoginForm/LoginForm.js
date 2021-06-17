import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import Button from '../../uiKit/Button';

import '../FormStyles.css';
import './LoginForm.css';

const LoginForm = () => {
  const errorValidationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 characters minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain letters'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={errorValidationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="form form-login">
            <div className="form-row">
              <label htmlFor="username">Username</label>
              <Field
                className={classnames('input', { 'input-error': dirty && !isValid })}
                id="username"
                name="username"
              />
              <ErrorMessage name="username" component="span" className="error" />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <Field
                className={classnames('input', { 'input-error': dirty && !isValid })}
                id="password"
                name="password"
              />
              <ErrorMessage name="password" component="span" className="error" />
            </div>

            <Button
              text="Login"
              type="submit"
              variant="primary default"
              className={!(dirty && isValid) ? 'disabled-btn' : ''}
              disabled={!(dirty && isValid)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
