import React, { Component } from 'react';
import './App.css';
import FormikSignupForm from './components/SignupForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Formik form</h1>
        <FormikSignupForm
          email=""
        >
        </FormikSignupForm>
      </div>
    );
  }
}

export default App;
