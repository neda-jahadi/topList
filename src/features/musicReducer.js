import {createReducer, createAction} from '@reduxjs/toolkit';

const addToMusicList = createAction('add to music list');
const editMusicList = createAction('edit music list');
const removeFromMusicList = createAction('remove from music list');
const musicListActions = {
    addToMusicList,
    editMusicList,
    removeFromMusicList
}

const musicList = [
    {title: 'Ja må du leva', creator: 'Jäkligt okänd', rating:'2', usedBefore:'yes', comment: 'Pinsamt när folk sjunger den för en'},
    {title: 'Wait', creator: 'Adventure Club', usedBefore:'yes', rating:'4', comment: 'Happy flappy'},
    {title: 'Help im alive', creator: 'Metric', usedBefore:'no', rating:'', comment: 'Tips från kompis'},
    {title: 'Bonfire', creator: 'Knife Party', usedBefore:'yes', rating:'5', comment: 'LRAD är visserligen bättre.'},
    {title: 'Jesus Antichristus', creator: ':Wumpscut', usedBefore:'yes', rating:'2', comment: 'Den var bättre förr.'},
];

const reducer = createReducer(musicList, {
    [addToMusicList]: (state, action) => [ action.payload, ...state],
    [removeFromMusicList]: (state, action) => state.filter(item => item.title !== action.payload),
    [editMusicList]:(state, action)=> state.map(item=>{

        if (item.title===action.payload.title && item.creator===action.payload.creator){
            return action.payload.editedObject
        }
        else{
            return item
        }
    })
})

export { reducer, musicListActions };