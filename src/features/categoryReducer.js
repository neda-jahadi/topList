import {createReducer, createAction} from '@reduxjs/toolkit';

const categoryDisplayed = '';

const choseMusic = createAction('music');
const choseBooks = createAction('books');
const choseMovies = createAction('movies');
const startPage = createAction('')

const categoryActions = {
    choseMusic,
    choseBooks,
    choseMovies,
    startPage
}


const reducer = createReducer(categoryDisplayed, {
    [choseMusic]: ()=> 'music',
    [choseBooks]: ()=> 'books',
    [choseMovies]: ()=> 'movies',
    [startPage]: ()=> 'start'
});

export { reducer , categoryActions };