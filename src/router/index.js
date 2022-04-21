import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Addrecipe from '../views/Addrecipe'
import Login from '../views/Login'
import Profile from '../views/Profile'
import Register from '../views/Register'
import Index from '../views/Index'
import Detailrecipe from '../views/Detailrecipe'
import Searchrecipe from '../views/Searchrecipe'
import EditRecipe from '../views/Editrecipe'

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Index />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="addrecipe" element={<Addrecipe />} />
                    <Route path="editrecipe" element={<EditRecipe />} />
                    <Route path=":id" element={<Detailrecipe />} />
                    <Route path="recipe" element={<Searchrecipe />} />


                </Route>
            </Routes>
        </BrowserRouter >

    )
}

export default router
