import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import styleLogin from "../assets/styles/css/Login.module.css"
import LogoLogin from "../components/LogoLogin";

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    })
    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(form)
        if (form.name === "" | form.email === "" | form.phone === "") {
            alert('semua input wajib di isi')
        }
        else {
            const body = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                password: form.password,
                fileName: 'gambar.png'
            }
            axios.post(`${process.env.REACT_APP_BACKEN_URL}/register/`, body)
                .then((response) => {
                    // console.log(response.data.message)
                    alert(`${response.data.message}`)
                })
                .catch((err) => {
                    // alert(`gagal menambahkan user : ${err}`)
                    console.log(err)
                })
        }
    }
    return (
        <>
            <Row className={`${styleLogin.row} ${styleLogin.contain}`} >
                <LogoLogin />
                <Col sm={7} md={6} className={styleLogin.overflowRegisterScroll} >
                    <div className={styleLogin.formInput}>
                        <div className={styleLogin.formGroup}>
                            <h1 className={styleLogin.inputH1} >Let's Get Started !</h1>
                            <small className={styleLogin.inputSmall} >Create new account to access all features</small>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <label className={styleLogin.inputLabel} >Name</label>
                                <input onChange={(e) => setForm({ ...form, name: e.target.value })} className={styleLogin.formInputType} type="text" placeholder="Name" />
                                <label className={styleLogin.inputLabel} >Email Addres</label>
                                <input onChange={(e) => setForm({ ...form, email: e.target.value })} className={styleLogin.formInputType} type="email" placeholder="Enter email address" />
                                <label className={styleLogin.inputLabel} >Phone Number</label>
                                <input onChange={(e) => setForm({ ...form, phone: e.target.value })} className={styleLogin.formInputType} type="text" placeholder="08xxxxxxxxxx" />
                                <label className={styleLogin.inputLabel} >Create New Password</label>
                                <input onChange={(e) => setForm({ ...form, password: e.target.value })} className={styleLogin.formInputType} type="password" placeholder="Create New Password" />
                                <label className={styleLogin.inputLabel} >New Password</label>
                                <input onChange={(e) => setForm({ ...form, password: e.target.value })} className={styleLogin.formInputType} type="password" placeholder="New Password" />
                                <div className={styleLogin.formCheck}>
                                    <input className={styleLogin.formCheckBox} type="checkbox" />
                                    <label className={styleLogin.inputlabelCheckBox}> I agree to terms & conditions</label>
                                </div>
                                <button className={styleLogin.inputButton} type="submit">Register Account</button>
                                <div className={styleLogin.formNoAccount}>
                                    <label className={styleLogin.inputLabel} >Already have account? </label>
                                    <Link to="/login" className={styleLogin.inputAhrefLink}>
                                        Log in Here
                                    </Link>
                                    {/* <a className={styleLogin.inputAhref} href="./login.html">Log in Here </a> */}
                                </div>
                            </form>
                        </div >
                    </div >
                </Col >
            </Row >
        </>
    )
}

export default Register