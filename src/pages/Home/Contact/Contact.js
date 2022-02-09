import { useFormik } from "formik"
import { useState } from "react"
import Container from "../../../components/Container"
import './Contact.scss'
import { userService } from '../../../integration/user'
import { requestsService } from '../../../integration/request'

const Contact = ({ animated }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            budget: '',
            deadline: '',
            details: ''
        },
        onSubmit: values => {
            const user = {
                name: values.name,
                email: values.email
            }
            const request = values

            userService.save(user, (response) => {
                requestsService.save(request, (response) => {
                    requestsService.sendEmail(request, (response) => {
                        formik.resetForm({
                            name: '',
                            email: '',
                            budget: '',
                            deadline: '',
                            details: ''
                        })
                        alert("Thank you! I'm looking forward to talk to you.")
                    })
                })
            })
        },
    });

    return (
        <Container backgroundColor='#1E232B' text={'Contact'}>
            <div className={animated === true ? 'contactContainer animated' : 'contactContainer'}>
                <div className="headingWrapper color-bright">
                    <span className="header header--raiseUp">Contact</span>
                </div>
                <span>Wanna work together? Hit me up by filling the form below and I'll contact you in 2 business days maximum!</span>
                <form>
                    <div className='formContainer'>
                        <div className="inputs">
                            <div class="question">
                                <label>Name</label>
                                <input type="text" required id="name"
                                    name="name"
                                    type="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name} />
                            </div>
                            <div class="question">
                                <label>Email</label>
                                <input type="text" required id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />
                            </div>
                            <div class="question">
                                <label>Budget</label>
                                <input type="text" id="budget"
                                    name="budget"
                                    type="budget"
                                    onChange={formik.handleChange}
                                    value={formik.values.budget} />
                            </div>
                            <div class="question">
                                <label>Deadline</label>
                                <input type="text" id="deadline"
                                    name="deadline"
                                    type="deadline"
                                    onChange={formik.handleChange}
                                    value={formik.values.deadline} />
                            </div>
                        </div>
                        <div class="question">
                            <label>Project Details</label>
                            <textarea required id="details"
                                name="details"
                                type="details"
                                onChange={formik.handleChange}
                                value={formik.values.details} />
                        </div>

                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <button className="buttonSubmit" onClick={formik.handleSubmit}>
                            <div className={animated === true ? "button animated" : "button"}>
                                <span>Send!</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Contact