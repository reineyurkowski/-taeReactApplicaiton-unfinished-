//frameworks
    //import react defaults
        import ReactDOM from 'react-dom/client'
        import React, {useState, useEffect, useRef} from "react";
    //import react-router-dom
    import { 
        BrowserRouter, 
        Routes, 
        Route 
    } from "react-router-dom";
    //import THREE.js
    import * as THREE from 'three';
    import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
//styling
    import './index.css'
// scripts
    import DragAndDrop from './scripts/dragAndDrop';
//pageManagement
    import Body from './pageRouter'
    import Header from './header'
    import Footer from './footer';
    import WebGlLogo from './welGlLogo';
    //pages
        import About from './pages/pageAbout'
        import Everything from './pages/pageEverything';
        import Home from './pages/pageHome';
        import Plans from './pages/pagePlans';


let Modules = {
    //react stuff
    ReactDOM,
    React, 
        useEffect,
        useState,
        useRef,
    //react-router
        BrowserRouter,
        Routes,
        Route,
    //THREE 
        THREE,
        FBXLoader,
    //scripts
        DragAndDrop,
    //Page management
        Body,
        Header,
        Footer,
        WebGlLogo,
        //Pages
            Everything,
            About,
            Home,
            Plans,
            //chat client,
}

export default Modules;