import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, withFormik, Form, Field } from 'formik';
import Yup from 'yup';

class SignupForm extends Component {
  render() {
    const { 
      values, 
      handleChange,
      // handleSubmit
    } = this.props;

    return (
      // <form onSubmit={ handleSubmit }>
      // <input type="email" name="email" value={values.email} onChange={handleChange} />
      // <input type="password" name="password" value={values.password} onChange={handleChange} />
      // <button>Submit</button>
      // </form>

      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <label htmlFor="">
          <Field type="checkbox" name="newsletter" checked={values.newsletter} />
          Join Our news letter
        </label>
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>

        <button>Submit</button>
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

  handleSubmit(values) {
    console.log(values);
  }

})(SignupForm);

export default FormikSignupForm;