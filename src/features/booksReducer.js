import {createReducer, createAction} from '@reduxjs/toolkit';

const addToBooksList = createAction('add to book list');
const editBooksList = createAction('edit to book list');
const removeFromBooksList = createAction('remove from book list');

const booksListActions = {
    addToBooksList,
    editBooksList,
    removeFromBooksList
}

const booksList = [
    {title: 'Ronja Rövardotter', creator: 'Astrid Lindgren', rating:'5', usedBefore:'yes', comment: 'Bra barnbok'},
    {title: 'Narnia', creator: 'C.S Lewis', rating: '', usedBefore:'no', comment: 'Kan den här vara bra?'},
    {title: 'Jag En', creator: 'David Leviathan', rating:'3', usedBefore:'yes', comment: 'Läs den!'},
    {title: 'Lida', creator: 'Stephen King', rating:'2', usedBefore:'yes', comment: 'Sjukt läskig'},
    {title: 'Egalias Döttrar', creator: 'Bra fråga', rating:'', usedBefore:'no', comment: 'Nåt feministiskt'},
];

const reducer = createReducer(booksList, {
    [addToBooksList]: (state, action) => [ action.payload, ...state],
    [removeFromBooksList]: (state, action) => state.filter( item => item.title !== action.payload),
    [editBooksList]: (state, action) => 
        state.map( item=> { 

            if(item.title === action.payload.title && item.creator === action.payload.creator){
                
                return action.payload.editedObject
            }
            else {
                return item
            }
        })
})

export { reducer, booksListActions };
