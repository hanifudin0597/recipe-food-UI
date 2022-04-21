import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPrimary from "../components/Navbar"
import styleIndex from '../assets/styles/css/Index.module.css'
import { Row, Col } from 'reactstrap'
import Footer from '../components/Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Index = () => {
    const [recipe, setRecipe] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEN_URL}/latest-recipe`)
            .then((response) => {
                // console.log(response)
                setRecipe(response.data)
                setIsLoading(false)
            })
            .catch((err) => {
                // console.log(err)
                setIsError(true)
                setErrorMessage(err)
            })
    }, [])

    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    const onSubmit = (e, queryParam) => {
        e.preventDefault()

        return navigate(`/recipe?searchRecipe=${queryParam}`)
    }

    return (
        <>
            <Row className="d-flex flex-column gx-0" >
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col>
                    {/* main content */}
                    <section className={`row gx-0 ${styleIndex.hero}`}>
                        <div className={`content col-9 d-flex flex-column justify-content-center height: 100% w-75% ${styleIndex.content}`}>
                            <h1 className={`${styleIndex.texth1}`} >Discover Recipe & Delicious Food</h1>
                            <div className={styleIndex.formGroup}>
                                <div className={`icon ${styleIndex.fontAwesomeSearch} `}><i className="fa-solid fa-magnifying-glass"></i></div>
                                {/* <input type="text" className={styleIndex.formGroupInput} placeholder="Search Restaurant, Food" /> */}
                                <form onSubmit={(e) => onSubmit(e, search)} action="">
                                    <input onChange={(e) => setSearch(e.target.value)} type="text" className={styleIndex.formGroupInput} placeholder="Search Restaurant, Food" />
                                </form>
                            </div>
                        </div>
                        <div className={`col-3 d-flex align-items-center ${styleIndex.decoration}`}>
                            <img className={styleIndex.decorationImg} src="https://s3-alpha-sig.figma.com/img/2ca7/faff/4da51338c06dd21688b82eae3bc9dfa6?Expires=1650844800&Signature=RIAAwPyMnN9sDA~c8Vx37nsEZmfiLIZ6GG7h2MNZd7paGI2p4uAg65T6oU8WaDhakelGrKs1xwc-UrgHIYT89AiyFc72oh2QiE0g8luZRbgBPnQXwxh1~0JqrwW9n16h98vvpU4o9isbtvAZXSdbmS1wFdthyKyFPplbOaZ6NmxRxqEUHgR~CJywLOQBeHhvNNHt3CQ-Ku3G1tcYeLMcHg8L6vjCwMBZUP7G13keRoshWpkOH6vr7ogdNa~djMUphT7c8hnnJIX0n2cvqxeb9G2Zj2C4j8tT~GfbgfuraEWSw1SSFbLWF0KggZeUVnylNnn5tIr8BKEQt4H61zpcYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="image container" />
                        </div>
                    </section>
                </Col>
                <Col>
                    {/* Recomended recipe */}
                    <section className={`row second-hero d-flex flex-column gx-0 ${styleIndex.hero}`}>
                        <div className="text-popular-recipe col-12">
                            <h1 className={styleIndex.textRecommendedRecipe} >Popular For You !</h1>
                        </div>
                        <div className="row d-flex flex-row col-12">
                            <div className="col-6">
                                <img className={styleIndex.recommendedImg} src="https://s3-alpha-sig.figma.com/img/e20b/679e/52207741d95649c4cb58a57ba663027f?Expires=1650844800&Signature=NxY1FvFXnvn4ivra4pxiWZPNIu4UQY5704bDmh8GcP7~B0rCYn9gZd7fdeHWATJTKwWxZACIzZt2Zu4nyOx~v8~8XWZdavNAIrF-J1Vw8C6uH8wJmOzxvpFE7-rjJSx~cxWnW1aiV0IKzrK9ah3e7YXNbZ-nkw5-oTq6BSdvR6jHQS-zcNpxN0ZyZ4qcETdr3e73v4yVdcovdXFr6kR~M-oO~UR-9tVG0nLf2~Sbu03dQ54YVH2gUBoJdqMGyLKa-fBGobZmeSe6BbE8UVKwXmAHvAaMiiR~PoGtgWGfl27tHteiVMAKfBbNvz8n9d2b4pek8LtkNS58w2bQ0h-Wmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="image popular recipe" />
                                {/* <div className={styleIndex.boderRecommendedImg} ></div> */}
                            </div>
                            <div className={`col-6 d-flex flex-column justify-content-center ${styleIndex.formTextRecommended}`}>
                                <h1 className={styleIndex.textRecommendedImg} >Healthy Bone Broth Ramen (Quick & Easy)</h1>
                                <small className={styleIndex.textSmallRecommendedImg} >Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s
                                    right!</small>
                                <button className={styleIndex.buttonRecommended} onClick="location.href='/detailrecipe.html'" type="submit">Learn More</button>
                            </div>
                        </div>

                    </section>
                </Col>
                <Col>
                    {/* new recipe */}
                    <section className={`row second-hero d-flex flex-column gx-0 ${styleIndex.hero}`}>
                        <div className="text-popular-recipe col-12">
                            <h1 className={styleIndex.textRecommendedRecipe} >New Recipe</h1>
                        </div>
                        <div className="row d-flex flex-row col-12">
                            <div className="col-6">
                                <img className={styleIndex.recommendedImg} src="https://s3-alpha-sig.figma.com/img/a940/c01b/c2792cef25a0bfa97a2bd8c65b80f9c5?Expires=1650844800&Signature=IqXV5VER~KytLlE8ceWM2junqiT-ZBiY5A8A9nJ4V7hirYHrdAHK6y8XViTx1FEQyEYmvBjNpg1myRCM8ss6nMkpJoZbv2pV4LVcBAUl-7xdaYKHKPh3ymqSC~18Nl7eUfhVdxoaHxbf5OVLa8HNdoQZof8xAxyfFtCi2vy63DqPGWW5fP1BKkcf647W8YMWfrtaxJ6XqzrRp~EVNsXZ5Nd~G9U~ToagswAnz9qPAVRONj5QpNrLqjH4wi3Hehlttq4FodSFj7MVfid5HRrO8DVYaMzAx789n4mCszmrb5TjlyVa~lOa4URyPRM7xigBPSHw~Z6NihWmHbv8WJOgbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="image popular recipe" />
                            </div>
                            <div className={`col-6 d-flex flex-column justify-content-center ${styleIndex.formTextRecommended}`}>
                                <h1 className={styleIndex.textRecommendedImg} >Healthy Bone Broth Ramen (Quick & Easy)</h1>
                                <small className={styleIndex.textSmallRecommendedImg} >Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s
                                    right!</small>
                                <button className={styleIndex.buttonRecommended} onClick="location.href='/detailrecipe.html'" type="submit">Learn More</button>
                            </div>
                        </div>

                    </section>
                </Col>
                <Col>
                    <section className={`row second-hero d-flex flex-column gx-0 ${[styleIndex.hero, styleIndex.widthRow]}`}>
                        <div className={`${styleIndex.texListNewRecipe} ${styleIndex.widthCardImg}`}>
                            <h1 className={styleIndex.textAllrecipeH1} >Latest Recipe</h1>
                        </div>
                        <div className={`${styleIndex.cardNewRecipe} ${styleIndex.widthCardImg}`}>
                            <div className="row">
                                {
                                    isLoading ? (
                                        <div>Loading</div>
                                    ) : (
                                        recipe.data.map((e, i) => {
                                            return (
                                                < div key={i} className={`col-sm-6 col-md-4 col-lg-4 ${styleIndex.divCardImg}`}>
                                                    <div className=" d-flex justify-content-center">
                                                        <Link to={`/${e.id}`} >
                                                            <div className={styleIndex.textDecorationListNewRecipe}>
                                                                <img src={`${process.env.REACT_APP_BACKEN_URL}/${e.photo}`} className={styleIndex.listNewRecipeImg} alt="" />
                                                                <p className={styleIndex.tagPListNewRecipe}>{e.title}</p>
                                                            </div>
                                                        </Link>

                                                    </div>
                                                </div>
                                            )
                                        })

                                    )

                                }

                            </div>
                        </div >
                    </section >
                    {/* <section>

                    </section> */}
                </Col >
                <Col>
                    <Footer />
                </Col >
            </Row >
        </>
    )
}

export default Index

