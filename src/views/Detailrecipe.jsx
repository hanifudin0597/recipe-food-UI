import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styleDetail from '../assets/styles/css/DetailRecipe.module.css'
import Footer from '../components/Footer'
import { Row, Col } from 'reactstrap'
import { useEffect } from "react";
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom";
import NavBarPrimary from "../components/Navbar";

const Detailrecipe = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
        // console.log(JSON.parse(user))


        if (!token || !user) {
            navigate('/login')
        }
        axios.get(`${process.env.REACT_APP_BACKEN_URL}/recipe/${id}`, {
            headers: {
                token: token
            }
        })
            .then((response) => {
                setRecipe(response.data.data)
                // setIsLoading(false)
            })
            .catch((err) => {
                // console.log(err)
                setIsError(true)
                setErrorMessage(err)
            })
    }, [])
    return (
        <>
            <Row className={`d-flex flex-column gx-0`} >
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col className={styleDetail.marginAfterNavbarMenu} >
                    {/* Content Detail Recipe */}
                    <section className={` w-100 ${styleDetail}`} >
                        <div className={`main-content d-flex flex-column align-items-center ${styleDetail}`}>
                            <div className="title-recipe">
                                <h1 className={styleDetail.textH1} >{recipe.title}</h1>
                                <img className={styleDetail.detailImg} src={`${process.env.REACT_APP_BACKEN_URL}/${recipe.photo}`} alt="img detail recipe" />
                                <div className="icon-bookmarks">
                                    <img src="/assets/images/svg/bookmarks.svg" alt="" />

                                </div>
                                <div className="icon-like">
                                    <img src="/assets/images/svg/like.svg" alt="" />
                                </div>
                            </div>
                            <div className={`d-flex flex-column align-items-start ${styleDetail.detailIngredient}`}>
                                <h3>Ingredients</h3>
                                <div className={styleDetail.listIngredient}>
                                    <ul>
                                        <li>{recipe.ingredients}</li>
                                        {/* <li>- 2 tbsp mayonnaise</li>
                                                            <li>- 3 slices bread</li>
                                                            <li>- a little butter</li>
                                                            <li>- ⅓ carton of cress</li>
                                                            <li>- 2-3 slices of tomato or a lettuce leaf
                                                                and a slice of ham or cheese</li>
                                                            <li>- crisps , to serve</li> */}
                                    </ul>
                                </div>
                                <div className="video">
                                    <h3>Video Step</h3>
                                    <a href="./detailvideo.html"><input className={styleDetail.buttonVideo} type="button" /></a>
                                </div>
                            </div>
                        </div >
                    </section >
                </Col >
                <Col>
                    {/* comment recipe */}
                    <section className="w-100">
                        <div className={`d-flex flex-column ${styleDetail.commentRecipe}`}>
                            <textarea className={styleDetail.inputTextArea} cols="30" rows="10" placeholder="Comment :"></textarea>
                            <button className={styleDetail.buttonComment} >Send</button>
                            <div className="title-comment">
                                <h3>Comment</h3>
                            </div>
                            <div className={`d-flex flex-row ${styleDetail.formCommentBypeople}`}>
                                <img className={styleDetail.commentByPeopleImg} src="https://s3-alpha-sig.figma.com/img/3d1d/4c1c/c08f710828e1d2aacf71af8c92583062?Expires=1650844800&Signature=CIPGwGLE9QhceRNlGybm~0yvf0Ex0G0HQfvX9gOUlmLVwBd8G5fzT6rzqoMMjCFw47Gbnd8r012T~Pix4Qj2SF3EMHSUCNXhbLkGDixhvROF-UDHGRdz0ciYtFAt-lhJjUbRMgWjfq2P~3ZrTEc~5n2Ct4HyQS86bsbOe6ACeoo2vEC-cxXKrAY6dRaNk~tb-nmO9sy~Ow3EMjUBsXoKhsSM7awvpzY3OOvOI7aCtdJcLRco5SPaBjTLXJ0FiP04ei6ZUQ0rQO1TyJwOoHeZAIRJjFhWyf2rcyJiZIytppfJLtqaU3fTz6DazQqeo4dOfBpvrQd-kxXMppbxA3BtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="img comment people" />
                                <div className="author">
                                    <h5>Ayudia</h5>
                                    <small>Nice recipe. simple and delicious, thankyou</small>
                                    {/* <p>Nice recipe. simple and delicious, thankyou</p> */}
                                </div>
                            </div>
                        </div>
                    </section >
                </Col >
                <Col>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}

export default Detailrecipe