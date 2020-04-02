import React, { Component } from "react"
import { connect } from "react-redux"
import FormField from "../utils/FormField"
import { update } from "../utils/FormActions"

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  }
  submitForm = e => {
    e.preventDefault()
    console.log("send")
  }
  updateForm = element => {
    console.log(element)
    const newFormdata = update(element, this.state.formdata, "login")
    this.setState({ formError: false, formdata: newFormdata })
  }
  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={e => this.submitForm(e)}>
          <FormField id={"email"} formdata={this.state.formdata.email} change={element => this.updateForm(element)} />
          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />
        </form>
      </div>
    )
  }
}

export default connect()(Login)
