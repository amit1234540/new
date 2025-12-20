import React from "react";
import { Formik, Field, Form } from "formik";
import { Password } from "@mui/icons-material";
import axios from "axios";
import Nav from "../Navbar/Nav";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Login = () => {
	const history = useHistory();
	return (
		<>
		<Nav/>
	
		<div className="form-container">
			<div className="form-box">
				<div className="text20">
					<h4>Login</h4>
					
				</div>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}

					onSubmit={async (values) => {
						axios
							.post("http://localhost:3000/login", values)
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
						<Field id="password" name="password" placeholder="***" />

						<div className="link1">
							<div className="link">
								<button type="submit" onClick={() => history.push("/")}>Submit</button>

								<div className="login-1">
									<h6 onClick={() => history.push("/Sign")}>
										Already have an account ? Signup
									</h6>
								</div>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
		</>
	);
};
export default Login;