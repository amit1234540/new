import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useState, useEffect } from "react";
import Nav from "../Navbar/Nav"; // Ensure Nav is correctly imported

function Contact() {
  
  return (
    <>
      {/* Render the Nav component */}
      <Nav />

      <div>
        <div className='center-h'>
          <h1>Contact us</h1>
        </div>
        <div className='contact-add'>
          <div className='contact-container'>



            <Formik
              initialValues={{
                name: '',
                email: '',
                message: ''
              }}
              onSubmit={async (values) => {
                axios.post("http://localhost:3000/contectadd", values)
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              <Form className='formdata'>
                <label htmlFor="name" className='formdata'>Name</label>
                <Field id="name" name="name" placeholder="name" className="radius" />

                <label htmlFor="email" className='formdata'>Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                  className="radius"
                />
                <label htmlFor="message" className="formdata">Message</label>
                <Field id="message" name="message" placeholder="message" className="radius" />
                <div className='link1'>
                  <div className='link'>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
