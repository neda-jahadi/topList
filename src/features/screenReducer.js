import {createReducer, createAction} from '@reduxjs/toolkit';


const currentScreen = 'welcomeScreen';

const listScreen = createAction('listScreen');
const formScreen = createAction('formScreen');
const homeScreen = createAction('welcomeScreen');

const screenActions = {
    listScreen,
    formScreen,
    homeScreen
}

const reducer = createReducer(currentScreen, (builder) => {
    builder
    .addCase(listScreen, () => 'listScreen')
    .addCase(formScreen, () => 'formScreen')
    .addCase(homeScreen, () => 'welcomeScreen')
})


export { reducer, screenActions };