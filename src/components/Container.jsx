import React from 'react';
import { categoryActions } from '../features/categoryReducer';
import bookIcon from '../assets/good.png';
import musicIcon from '../assets/music.png';
import movieIcon from '../assets/video-camera.png';
import { useSelector, useDispatch } from 'react-redux';
import './Container.css';

const Container = ({children}) => {

    const category = useSelector( state => state.category );
    const dispatch = useDispatch();

    let musicTab='';
    let bookTab='';
    let movieTab='';
    let colorBackground = '';

    switch(category){
        case 'music':
            musicTab=' tab-active';
            colorBackground = 'background-red';
        break;
        case 'books':
            bookTab=' tab-active';
            colorBackground = 'background-yellow';
        break;
        case 'movies':
            movieTab=' tab-active';
            colorBackground = 'background-green';
        break;
        default:
    }

    return(

        <section className={colorBackground}>
            <nav>
                    <button aria-label="Go to music" className={'tab background-red'+musicTab} 
                    onClick={()=> dispatch(categoryActions.choseMusic())}>
                        <img src={musicIcon} alt="Go to music category" className="music-icon"/>
                    </button>

                    <button aria-label="Go to book" className={'tab background-yellow'+bookTab} 
                    onClick={()=> dispatch(categoryActions.choseBooks())}>
                        <img src={bookIcon} alt="Go to book category" className="book-icon"/>
                    </button>

                    <button aria-label="Go to movies" className={'tab background-green'+movieTab} 
                    onClick={()=> dispatch(categoryActions.choseMovies())}>
                        <img src={movieIcon} alt="Go to movie category" className="movie-icon"/>
                    </button>

                </nav>
                <div className="content-wrapper">
                    {children}
                </div>
                
        </section>
    )
}

export default Container;