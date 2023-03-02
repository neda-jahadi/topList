import React from 'react';
import './StartCard.css';
import Music from '../assets/music.png'
import { useDispatch, useSelector } from 'react-redux';
import { screenActions } from '../features/screenReducer';
import { categoryActions } from '../features/categoryReducer';
import Movies from '../assets/video-camera.png'
import Books from '../assets/good.png'

const StartCard = ({genre}) => {
	const dispatch = useDispatch();
	const musicList = useSelector(state => state.musicList)
	const booksList = useSelector(state => state.booksList)	
	const moviesList = useSelector(state => state.moviesList)
	let title = '';
	let icon = null;
	let color = null;
	let lista = null;
	let list = null;
	
	switch(genre){
		case 'music': 
			list = musicList;
			title = 'Music';
			icon = Music; 
			color = 'red'
			break;
		case 'books': 
			list = booksList;
			title = 'Books';
			icon = Books;
			color = 'yellow'
			break;
		case 'movies':
			list = moviesList;
			color = 'green'
			title = 'Movies';
			icon = Movies;
			break;
		default:
			list = moviesList;
			color = 'green'
			title = 'Movies';
			icon = Movies; 
			break;		
	}

	const handler = (title, category) =>{
		if(title === 'Music'){
			dispatch(categoryActions.choseMusic())
			console.log('i if sats category', category)
		}
		else if(title === 'Books'){
			dispatch(categoryActions.choseBooks())
		}
		else if(title === 'Movies'){
			dispatch(categoryActions.choseMovies())
		}
		if(category === 'list'){
			dispatch(screenActions.listScreen())
		}
		else if(category === 'form'){
			dispatch(screenActions.formScreen())
		}
	}
	const handleClick = () => {
		// på clicket ska korten sepereras för att man ska kunna se hela kortet med listan
	}
	




	if(list.length === 0){
		lista = <p className={`text-${color}`}>No list items</p> 
	}
	else{
		let fiveLatestItems = list.slice(0, 5)
		lista = fiveLatestItems.map((item,index) => (
			<p key={item.title+index} className={`list-item text-${color}`}>{item.title} - {item.creator}</p>	
		))
	}

	return(
		<div className="start-card-container ">
			<div className={`start-card background-${color}`} onClick={handleClick}>
				<div className="title-container">
					<h2 className={`title text-${color}`}>{title}</h2>
					<img src={icon} alt="Icon" width="30em" height="40em" className="icon"/>
				</div>
				<div className="listStuff">
				{lista}
				</div>
				<div className="btn-container">
					<button className={`btn-list button-${color}`} onClick={()=> handler(title, 'list')}>{title}</button>
				</div>
			</div>
		</div>
		
	)
}

export default StartCard;