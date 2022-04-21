import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import NavBarPrimary from "../components/Navbar";
import styleAddrecipe from "../assets/styles/css/Addrecipe.module.css"
import LogoImage from "../assets/img/logoImageUpload.svg"

const Addrecipe = () => {
    const [form, setForm] = useState({
        id: '',
        username: '',
        phone: ''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <>
            <Row className="d-flex flex-column gx-0" >
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col>
                    <section  >
                        <div className={styleAddrecipe.mainContent}>
                            <form className={`d-flex flex-column justify-content-center align-items-center w-100 ${styleAddrecipe.formInput}`} action="">
                                <label className={styleAddrecipe.inpuImg} for="upload">
                                    <span className={styleAddrecipe.formLogoImg}>
                                        <img src={LogoImage} alt="" />
                                    </span>
                                    <input className={styleAddrecipe.uploadImg} type="file" id="upload" />
                                </label>
                                <input type="text" className={`${styleAddrecipe.textTitle}`} placeholder="Title" />
                                <textarea className={`${styleAddrecipe.textIngredients}`} name="" id="" cols="30" placeholder="Ingredients" rows="10"></textarea>
                                <input type="text" className={`${styleAddrecipe.uploadVideo}`} placeholder="Video" />

                                <button className={`${styleAddrecipe.buttonSubmit}`} type="submit" >Post</button>
                            </form>
                        </div>

                    </section>
                </Col>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}

export default Addrecipe