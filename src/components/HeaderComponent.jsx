import React from 'react';
import './headerstyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { screenActions } from '../features/screenReducer';
import bigLogo from '../assets/LogoBig.png';
import smallLogoRed from '../assets/LogoSmallRed.png'
import smallLogoYellow from '../assets/LogoSmallYellow.png'
import smallLogoGreen from '../assets/LogoSmallGreen.png'
import arrowBackRed from '../assets/back-red.png';
import arrowBackYellow from '../assets/back-yellow.png';
import arrowBackGreen from '../assets/back-green.png';


const HeaderComponent = () => {

    const dispatch = useDispatch();
    const screen = useSelector(state => state.screen);
    const category=useSelector(state=> state.category)
    let smallLogo=''
    let arrowBack=''
    let textColor=''

    switch(category){

        case 'music':
            smallLogo=smallLogoRed;
            arrowBack=arrowBackRed;
            textColor=' error-red';
            break;
        case 'books':
            smallLogo=smallLogoYellow;
            arrowBack=arrowBackYellow;
            textColor=' error-yellow';
            break;
        case 'movies':
            smallLogo=smallLogoGreen;
            arrowBack=arrowBackGreen;
            textColor=' error-green';
            break;
        default:

    }

    let logoClass = 'medium';

    let content = (<> 
    {/* ska visas i desktop */}
        <button className={'go-back-text desktop-size '+textColor} onClick={()=>dispatch(screenActions.homeScreen())}>Go back</button>
    {/* ska visas i mobilvy */}
        <img onClick={()=>dispatch(screenActions.homeScreen())} className="go-back mobile-size" src={arrowBack} alt="Go to previous page"/>
    {/* ska visas i desktopvy */}
        <img className={logoClass +' desktop-size'} src={bigLogo} alt="Go to homescreen" onClick={()=> dispatch(screenActions.homeScreen())}/>
    {/* ska visas i mobilvy */}

        <img className='logo-mobile mobile-size' src={smallLogo} alt="Go to homescreen" onClick={()=> dispatch(screenActions.homeScreen())}/>
        

        </>
    )

    if(screen === 'welcomeScreen'){
        logoClass = 'big';
        content = 
        <img className={logoClass} src={bigLogo} alt="Logo" onClick={()=> dispatch(screenActions.homeScreen())}/>;

    }


    return(
        <header>
            {content}
        </header>
    )
}

export default HeaderComponent;