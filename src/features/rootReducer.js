import { combineReducers } from 'redux';
import { reducer as musicReducer } from './musicReducer';
import { reducer as booksReducer } from './booksReducer';
import { reducer as moviesReducer } from './moviesReducer';
import { reducer as categoryReducer } from './categoryReducer';
import { reducer as screenReducer } from './screenReducer';

const rootReducer = combineReducers({
    musicList: musicReducer,
    booksList: booksReducer,
    moviesList: moviesReducer,
    category: categoryReducer,
    screen: screenReducer
});
export { rootReducer };