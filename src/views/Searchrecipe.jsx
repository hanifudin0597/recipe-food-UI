import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styleSearch from '../assets/styles/css/Search.module.css'
import { Row, Col } from 'reactstrap'
import Footer from '../components/Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useEffect } from "react";
import axios from "axios"
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import NavBarPrimary from "../components/Navbar";

const Search = () => {

    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const [searchRecipe, setSearchRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const resultSearch = queryParams.get("searchRecipe")

    axios.get(`${process.env.REACT_APP_BACKEN_URL}/recipe?searchRecipe=${resultSearch}`)
        .then((response) => {
            setSearchRecipe(response.data)
            // console.log(response.data.data)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            // setErrorMessage(err)
        })


    const onSubmit = (e, queryParam) => {
        e.preventDefault()

        return navigate(`/recipe?searchRecipe=${queryParam}`)
    }

    return (
        <>
            <Row className="d-flex flex-column gx-0" >
                {/* <h1>{search}</h1> */}
                <Col>
                    <NavBarPrimary />
                </Col>
                <Col className={styleSearch.row}>
                    <section className={`row second-hero d-flex flex-column gx-0 ${[styleSearch.hero, styleSearch.widthRow]}`}>
                        <div className={`${styleSearch.texListNewRecipe} ${styleSearch.widthCardImg}`}>
                            <h1 className={styleSearch.textAllrecipeH1} >Search Recipe</h1>
                        </div>
                        <div>
                            <form onSubmit={(e) => onSubmit(e, search)} action="">
                                <input onChange={(e) => setSearch(e.target.value)} type="text" className={styleSearch.formGroupInput} placeholder="Search Recipe" />
                                {/* <input onChange={(e) => setSearchRecipe({ ...searchRecipe, title: e.target.value })} className="ml-4" type="text" name="" id="" /> */}
                            </form>

                        </div>
                        <div className={`${styleSearch.cardNewRecipe} ${styleSearch.widthCardImg}`}>
                            <div className="row">
                                {
                                    isLoading ? (
                                        <div></div>
                                    ) : (
                                        searchRecipe.data.map((e, i) => {
                                            return (
                                                <div key={i} className={`col-sm-6 col-md-4 col-lg-4 ${styleSearch.divCardImg}`}>
                                                    <div className=" d-flex justify-content-center">
                                                        <Link to={`/${e.id}`} >
                                                            <div className={styleSearch.textDecorationListNewRecipe}>
                                                                <img src={`${process.env.REACT_APP_BACKEN_URL}/${e.photo}`} className={styleSearch.listNewRecipeImg} alt="" />
                                                                <p className={styleSearch.tagPListNewRecipe}>{e.title}</p>
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
                </Col >
                <Col>
                    <Footer />
                </Col >
            </Row >
        </>
    )
}

export default Search

