import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

class SignupForm extends Component {
  render() {
    const { 
      values, 
      // handleChange,
      // handleSubmit,
      errors,
      touched,
      isSubmitting,
    } = this.props;

    return (
      // <form onSubmit={ handleSubmit }>
      // <input type="email" name="email" value={values.email} onChange={handleChange} />
      // <input type="password" name="password" value={values.password} onChange={handleChange} />
      // <button>Submit</button>
      // </form>
      <Form>
        <div>
          { touched.email && errors.email &&  <p>{errors.email}</p>}
          <Field type="email" name="email" />
        </div>
        <div>
          { touched.password && errors.password &&  <p>{errors.password}</p>}
          <Field type="password" name="password" />
        </div>
        <label htmlFor="">
          <Field type="checkbox" name="newsletter" checked={values.newsletter} />
          Join Our news letter
        </label>
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>

        <button type="submit" disabled={ isSubmitting }>Submit</button>
      </Form>
    );
  }
}

const FormikSignupForm = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || true,
      plan: plan || 'free'
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('This is not valid email').required('Please provide the email'),
    password: Yup.string().min(6, 'The password must be 9 characters or longer').required(),
    
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // console.log(values);
    setTimeout(() => {
      if (values.email === 'test@gmail.com') {
        setErrors({
          email: 'This email is already taken!!'
        })        
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }

})(SignupForm);

export default FormikSignupForm;