import {createReducer, createAction} from '@reduxjs/toolkit';

const addToMoviesList = createAction('add to movies list');
const editMoviesList = createAction('edit movies list');
const removeFromMoviesList = createAction('remove from movies list');

const moviesListActions = {
    addToMoviesList,
    editMoviesList,
    removeFromMoviesList
}

const moviesList = [
    {title: 'Kill Bill', creator: 'Quentin Tarantino', rating:'', usedBefore:'no', comment: 'Läs den!'},
    {title: 'Fight Club', creator: 'David Fincher', rating:'5', usedBefore:'yes', comment: 'We do not talk about fight club!'},

];

const reducer = createReducer(moviesList, {
    [addToMoviesList]: (state, action) => [ action.payload, ...state],
    [removeFromMoviesList]: (state, action) => state.filter(item => item.title !== action.payload),
    [editMoviesList]: (state, action)=> state.map(item=>{
        if (item.title===action.payload.title && item.creator===action.payload.creator){
            return action.payload.editedObject
        }
        else{
            return item
        }
    })
})

export { reducer, moviesListActions };