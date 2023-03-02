import React,{useState} from 'react';
import './FormStyle.css';
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { musicListActions } from '../features/musicReducer';
import { booksListActions } from '../features/booksReducer';
import { moviesListActions } from '../features/moviesReducer';
import {categoryActions} from '../features/categoryReducer';
import { screenActions } from '../features/screenReducer';
import bookIcon from '../assets/good.png';
import musicIcon from '../assets/music.png';
import movieIcon from '../assets/video-camera.png';
const FormComponent = ()=>{
    const {register, handleSubmit, errors } = useForm();
    const [usedBefore, setUsedBefore] = useState(null);
	const dispatch = useDispatch();
    const category = useSelector( state => state.category );
    let h2 = '', titleText = '', creatorText = '', usedBeforeText = '';
    let colorFormClass = '';
    let colorInputClass='';
	let musicTab='';
    let bookTab='';
    let movieTab='';
    let buttonClass='';
    let errorClass='';
    const onSubmit = (data) => {
        if(category === 'music'){
            dispatch(musicListActions.addToMusicList(data));
        } 
        else if(category === 'books'){
            dispatch(booksListActions.addToBooksList(data));
        }
        else if(category === 'movies'){
            dispatch(moviesListActions.addToMoviesList(data));
        }
        dispatch(screenActions.listScreen());
    }
    switch(category){
        case 'music':
            h2 = 'Add Music';
            titleText = 'Song Title';
            creatorText = 'Artist';
            usedBeforeText = 'Listened to';
            colorFormClass = 'text-red';
            colorInputClass='input-background-red';
            musicTab=' tab-active';
            buttonClass=' button-red';
            errorClass=' error-red';
        break;
        case 'books':
            h2 = 'Add Book';
            titleText = 'Book Title';
            creatorText = 'Author';
            usedBeforeText = 'Read before';
            colorFormClass = 'text-yellow';
            colorInputClass='input-background-yellow';
            bookTab=' tab-active';
            buttonClass=' button-yellow';
            errorClass=' error-yellow';
        break;
        case 'movies':
            h2 = 'Add Movie';
            titleText = 'Movie Title';
            creatorText = 'Director';
            usedBeforeText = 'Seen';
            colorFormClass = 'text-green';
            colorInputClass='input-background-green';
            movieTab=' tab-active';
            buttonClass=' button-green';
            errorClass=' error-green';
        break;
        default:
    }
    return(
		<div className="form-view">
            <nav>
                <button className={'tab background-red'+musicTab} onClick={()=> dispatch(categoryActions.choseMusic())}><img src={musicIcon} alt="Go to music category" className="music-icon"/></button>   
                <button className={'tab background-yellow'+bookTab} onClick={()=> dispatch(categoryActions.choseBooks())}><img src={bookIcon} alt="Go to book category" className="book-icon"/></button>
                <button className={'tab background-green'+movieTab} onClick={()=> dispatch(categoryActions.choseMovies())}><img src={movieIcon} alt="Go to movie category" className="movie-icon"/></button>
            </nav>
            <form className={colorFormClass} onSubmit={handleSubmit(onSubmit)}>
                <h2>{h2}</h2>
				<label htmlFor="title">{titleText}</label>
				<div className="form-input-container">
					<input className={colorInputClass} id="title" type="text" ref={register({ required: true, minLength:2, maxLength:20 })} name="title"/>
					{errors.title && errors.title.type === 'required' && <span className={errorClass}>Title is required</span>}
					{errors.title && errors.title.type === "minLength" && <span className={errorClass}>This field required min length of 2</span>}
					{errors.title && errors.title.type === "maxLength" && <span className={errorClass}>This field required max length of 20</span>}
				</div>		
				<label htmlFor="creator">{creatorText}</label>
				<div className="form-input-container">
                    <input className={colorInputClass} id="creator" type="text"  ref={register({maxLength:20})} name="creator"/>
					{errors.creator && errors.creator.type === "maxLength" && <span className={errorClass}>Max 20 characters</span>}
				</div>
                <div className="rating-container">
                    <div>
                        <fieldset>
                            <legend>{usedBeforeText}</legend>
                                <label htmlFor="yes">Yes</label>
                                <input className={colorInputClass} id="yes" type="radio" name="usedBefore" value='yes' onClick={()=> setUsedBefore(true)} ref={register({required: true})}/>
                                <label htmlFor="no">No</label>
                                <input className={colorInputClass} id="no" type="radio" name="usedBefore"  value="no" onClick={()=> setUsedBefore(false)} ref={register({required: true})}/>
                                {errors.usedBefore && errors.usedBefore.type === 'required' && <p className={errorClass}>Select Yes or No</p>}
                        </fieldset>
                        <div className="rate-div">
                        <label className="rate" htmlFor="rating">Rating 1-5</label>
                            <input className={colorInputClass} type="number" ref={register( {required:usedBefore, maxLength:1, min:1, max:5}) } name="rating"/>
                        </div>                        
                    </div>
                    {errors.rating && errors.rating.type === 'required' && <div className={errorClass + " error-rating"}>Rating is required</div>}
                    {errors.rating && errors.rating.type === 'min' && <div className={errorClass + " error-rating"}>Must be between 1-5</div>}
                    {errors.rating && errors.rating.type === 'max' && <div className={errorClass + " error-rating"}>Must be between 1-5</div>}
                    {errors.rating && errors.rating.type === 'maxLength' && <div className={errorClass + " error-rating"}>Max 1 character</div>}
                </div>
				<label htmlFor="comment">Comment</label>
				<div className="form-textarea-container">
					<textarea className={colorInputClass}  id="comment" cols="30" rows="8" ref={register({maxLength:60})} name="comment"/>
					{errors.comment && errors.comment.type === 'maxLength' && <span className={errorClass}>Max 60 characters</span>}
				</div>
                <input type="submit" value='Submit' className={buttonClass + " submit-button"}/>
            </form>
		</div>
    )
}
export default FormComponent;