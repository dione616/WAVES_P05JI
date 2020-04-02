import React from "react"
import Button from "../utils/Button"
import Login from "./Login"

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customer</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, blanditiis doloribus fuga veniam quae quod
            illo recusandae rem quas ratione, eius, voluptate aspernatur praesentium veritatis saepe tempore dicta
            voluptatem officia.
            <Button
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyle={{
                margin: "15px"
              }}
            />
          </div>
          <div className="right">
            <h1>Register customer</h1>
            If you have an account please login
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLogin
