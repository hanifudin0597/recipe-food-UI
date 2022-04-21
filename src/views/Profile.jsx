import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPrimary from "../components/Navbar"
import styleProfile from '../assets/styles/css/Profile.module.css'
import { Row, Col } from 'reactstrap'
import Footer from '../components/Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iconEdit from '../assets/img/iconEditUser.svg'
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardTitle, CardText, Button } from 'reactstrap'
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Profile = () => {

    const [activeTabs, setactiveTabs] = useState('1')
    const { id } = useParams()
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    const [dataUser, setDataUser] = useState({})
    const [myRecipe, setMyRecipe] = useState([])
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)


    // get user detail
    useEffect(() => {
        if (!token | !user) {
            return navigate("/login")
        }
        axios.get(`${process.env.REACT_APP_BACKEN_URL}/user-detail`, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                setDataUser(response.data.data[0])
                // console.log(response.data.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // get my recipe
    useEffect(() => {
        if (!token | !user) {
            return navigate("/login")
        }
        axios.get(`${process.env.REACT_APP_BACKEN_URL}/myRecipe`, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                setMyRecipe(response.data)
                setIsLoading(false)
                // console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // delete
    const onClick = (id) => {
        console.log(id)
        // e.preventDefault()
        const token = localStorage.getItem("token")

        // console.log(token)
        axios.post(`${process.env.REACT_APP_BACKEN_URL}/delete-recipe/${id}`, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                console.log(response.data)
                // alert(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {/* <h1>Halaman Profile</h1> */}
            <Row className="d-flex flex-column gx-0">
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col>
                    <section className={`hero ${styleProfile.hero}`}>
                        <div className={` w-100 ${styleProfile.mainContent}`}>
                            <div className={styleProfile.profile}>
                                <img className={styleProfile.profileImg} src={`${process.env.REACT_APP_BACKEN_URL}/${dataUser.photo}`} alt="" />
                                <div className={styleProfile.iconEditUser}>
                                    <img className={styleProfile.userImg} src={iconEdit} alt="" />
                                </div>
                                <h4>{dataUser.name}</h4>
                            </div>
                            <Nav tabs className={`d-flex justify-content-left ${styleProfile.nabTab}`}>
                                <NavItem>
                                    <NavLink className={activeTabs == "1" ? "active" : ""} onClick={() => setactiveTabs("1")}>
                                        My Recipe
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTabs == "2" ? "active" : ""} onClick={() => setactiveTabs("2")}>
                                        Saved Recipe
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTabs == "3" ? "active" : ""} onClick={() => setactiveTabs("3")}>
                                        Liked Recipe
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTabs} className={styleProfile.tabContentNav} >
                                <TabPane tabId="1">
                                    <Row className="d-flex flex-row justify-content-left w-100" >
                                        {/* <Col className="col-sm-6 col-md-4 col-lg-4" sm="12"> */}
                                        <div className="row">
                                            {
                                                isLoading ? (
                                                    <div>Loading</div>
                                                ) : (
                                                    myRecipe.data.map((e, i) => {
                                                        return (
                                                            <div className="col-sm-6 col-md-3 col-lg-3">
                                                                <div key={i} className={` d-flex w-100 ${styleProfile.listMyRecipe}`}>
                                                                    <div className={`d-flex flex-column ${styleProfile.formListMyRecipe}`}>
                                                                        <div >

                                                                            <Link onClick={() => onClick(e.id)} to="" className={`fa-solid fa-pen-to-square ${styleProfile.actionRecipeEdit} `}></Link>
                                                                            <Link onClick={() => onClick(e.id)} to="" className={`fa-solid fa-trash ${styleProfile.actionRecipeDelete}`}></Link>
                                                                            {/* <form action="">
                                                                                <button onClick={() => onClick(e)} >delete resep</button>
                                                                            </form> */}
                                                                            <Link to={`/${e.id}`}>
                                                                                <img className={styleProfile.cardMyRecipeImg} src={`${process.env.REACT_APP_BACKEN_URL}/${e.photo}`} alt="" />
                                                                                {/* <small className={styleProfile.titleMyRecipe} >{e.title}</small> */}
                                                                            </Link>
                                                                        </div>

                                                                    </div>


                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                )
                                            }
                                        </div>


                                        {/* </Col> */}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col className={styleProfile.heighTabContent} sm="12">
                                            {/* <h4>Tab 2 Contents</h4> */}
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col className={styleProfile.heighTabContent} sm="12">
                                            {/* <h4>Tab 3 Contents</h4> */}
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </section>
                </Col>
                <Col>
                    <Footer />
                </Col>
            </Row >

        </>
    )
}

export default Profile