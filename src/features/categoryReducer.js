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


const reducer = createReducer(categoryDisplayed, (builder) => {
    builder
    .addCase(choseMusic, () => 'music')
    .addCase(choseBooks, () => 'books')
    .addCase(choseMovies, () => 'movies')
    .addCase(startPage, () => 'start')
});

export { reducer , categoryActions };