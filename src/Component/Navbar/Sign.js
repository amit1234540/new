import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from "axios";
import Nav from "../Navbar/Nav"; // Ensure Nav is correctly imported

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Sign() {
  const history = useHistory();
  return (
    <>
    <Nav />
    <div className="form-container">
			
			<div className="form-box mt-5">
				<div className="text20">
					<h1>SignUp</h1>
				</div>
				<Formik
					initialValues={{
						firstname: "",
						lastname: "",
						email: "",
						password: "",
					}}

					onSubmit={async (values) => {
						axios
							.post("http://localhost:3000/signup", values)
							.then(function (response) {
								console.log(response);
								history.push("/login")
							})
							.catch(function (error) {
								console.log(error);
							});
					}}
					
				>
					<Form>
						<label htmlFor="firstname">firstname</label>
						<Field id="firstname" name="firstname" placeholder="firstname" />
						<br></br>
						<br></br>

						<label htmlFor="lastname">Last Name</label>
						<Field id="lastname" name="lastname" placeholder="lastname" />
						<br></br>
						<br></br>

						<label htmlFor="email">Email</label>
						<Field
							id="email"
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>
						<br></br>
						<br></br>

						<label htmlFor="password">password</label>
						<Field id="password" name="password" placeholder="******" />

						<div className="link1">
							<div className="link">
								<button type="submit">Submit</button>

								<div className="login-1">
									<h6 onClick={() => history.push("/Login")}>
										Don't have an account? Login
										
									</h6>
								</div>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
			</div>
		
  </>
  )
}

export default Sign