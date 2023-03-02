import React,{useState} from 'react'
import './ListCardStyle.css'
import { useSelector, useDispatch } from 'react-redux';
import { musicListActions } from '../features/musicReducer'
import { booksListActions } from '../features/booksReducer'
import { moviesListActions } from '../features/moviesReducer'

const ListCard=({title, creator, usedBefore, rating, comment})=>{
    
    const dispatch = useDispatch();
    const category = useSelector(state=>state.category);
    const [editable, setEditable]=useState(false)

    const [editTitle, setEditTitle]=useState(title);
    const [editCreator, setEditCreator]=useState(creator);
    const [editUsedBefore, setEditUsedBefore]=useState(usedBefore);
    const [editRating, setEditRating]=useState(rating);
    const [editComment, setEditComment]=useState(comment);

    let creatorText='', usedBeforeText='', colorClass='', colorClassButton='', ratingText='';
    let content='itemCard'
   
    
    switch (category){

        case 'music':
            creatorText='Artist';
            usedBeforeText='Listened to';
            colorClass='red'
            colorClassButton='red-button'
            break;

        case 'books':
            creatorText='Author';
            usedBeforeText='Read';
            colorClass='yellow'
            colorClassButton='yellow-button'
            break;

        case 'movies':
            creatorText='Producer';
            usedBeforeText='Seen';
            colorClass='green'
            colorClassButton='green-button'
            break;

        default:
    }
    
    const handleDelete=(item)=>{

        if(category==='music'){
            dispatch(musicListActions.removeFromMusicList(item));
        }
        else if (category==='books'){
            dispatch(booksListActions.removeFromBooksList(item));
        }
        else if (category==='movies'){
            dispatch(moviesListActions.removeFromMoviesList(item));
        }
    }

    const handleSaveEdit=()=>{

        if (title===editTitle && creator===editCreator && usedBefore===editUsedBefore && rating===editRating && comment===editComment){
            setEditable(false)
        }

        else{
            let editObject={
                title:title,
                creator:creator,
                editedObject:{
                    title:editTitle,
                    creator:editCreator,
                    usedBefore:editUsedBefore,
                    rating:editRating,
                    comment:editComment
                }
            }

            if(category==='books'){
                dispatch(booksListActions.editBooksList(editObject));
            }
            else if (category==='music'){
                dispatch(musicListActions.editMusicList(editObject));
            }
            else{
                dispatch(moviesListActions.editMoviesList(editObject))
            }
          
            setEditable(false)
        }

    }

   
    if(rating===''){
        ratingText='Not rated'
    }
    else{
        ratingText='of 5'
    }
    const itemCard=(
    
            <div className={'list-card '+colorClass}>
                <button className={'delete-button '+colorClassButton} onClick={()=>handleDelete(title)}>X</button>
                <h3>{title}</h3>
            <div>  
                <p><strong>{creatorText}: </strong> {creator}</p>
                <p><strong>{usedBeforeText}: </strong> {usedBefore}</p>
                <p><strong>Rating: </strong>{rating} {ratingText}</p>
                <p><strong>Comment: </strong> {comment} </p>
            </div>
              
                
                <button className={'edit-button '+colorClassButton} onClick={()=>setEditable(true)}>Edit
                    {/* <img src={Edit} alt="Edit" className="edit-logo"/> */}
                </button>
            
                
            </div>
    )

    const editCard=(
        <div className={'edit-list-card ' +colorClass}>
        
        <button className={'delete-button '+colorClassButton} onClick={()=>handleDelete(title)}>X</button>
            <div className='edit-title-container'>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' value={editTitle} onChange={event=>setEditTitle(event.target.value)}/>
            </div>
        
            <div>   
                <label htmlFor='creator'>{creatorText}:</label>
                <input type='text' id='creator' value={editCreator} onChange={event=>setEditCreator(event.target.value)}/>
            </div>
         
            <div className='edit-radio-container'>
                <p>{usedBeforeText}:</p>
                <label htmlFor='yes'>Yes</label>
                <input type='radio' id='yes' name='usedBefore' onClick={()=>setEditUsedBefore('Yes')}/>
                <label htmlFor='no'>No</label>
                <input type='radio' id='no' name='usedBefore' onClick={()=>setEditUsedBefore('No')}/>

            </div>
         

            <div>
            <label htmlFor='rate'>Rating 1-5:</label>
                <input type='number'id='rate' min="1" max="5" value={editRating} onChange={event=>setEditRating(event.target.value)}/>
            </div>
          
            <div className='comment-container'>
                <label htmlFor='comment' className='comment-label'>Comment:</label>
                <textarea id='comment'  value={editComment} onChange={event=>setEditComment(event.target.value)}/>
            </div>
  
     
            <button className={'save-edit-button '+colorClassButton} onClick={handleSaveEdit}>
                Save
            </button>


        </div>
    )

    
    if (editable===false){
        content=itemCard;
    }
    else{
        content=editCard;
    }
    
 
    return (

        <>
           
            {content}

        </>

    )

}

export default ListCard