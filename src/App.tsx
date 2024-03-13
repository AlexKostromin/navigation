import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {NavWrapper} from "./components/pages/_styles";
import {Model} from "./components/pages/Model";





export const PATH = {
    PAGE1:'/adidas',
    PAGE2:'/puma',
    PAGE3:'/abibas',
    MODELPAGE:'adidas/:id'
} as const

function App() {
    return (
            <div>
                <div className={styles.header}><h1>HEADER</h1></div>
                <div className={styles.body}>
                    <div className={styles.nav}>
                        <NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></NavWrapper>
                    </div>
                    <div className={styles.content}>
                        <Routes>
                            <Route  path='/' element={<Navigate to={PATH.PAGE1}/>}/>
                            <Route  path={PATH.PAGE1} element={<Adidas/>}/>
                            <Route  path={PATH.PAGE2} element={<Puma/>}/>
                            <Route  path={PATH.PAGE3} element={<Abibas/>}/>
                            <Route path={PATH.MODELPAGE} element={<Model/>}/>
                            <Route path={'/*'} element={<Error404/>}/>
                            {/*<Route  path={PATH.ERRORPAGE} element={<Error404/>}/>
                            <Route path={'/*'} element={<Navigate to={'page/error'}/>}/>*/}
                        </Routes>
                    </div>
                </div>
                <div className={styles.footer}>abibas 2023</div>
            </div>

    );
}


export default App;

