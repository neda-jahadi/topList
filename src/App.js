import React from 'react';
import './App.css';
import StartCard from './components/StartCard';
import ListComponent from './components/ListComponent';
import FormComponent from './components/FormComponent';
import { useSelector } from 'react-redux';
import HeaderComponent from './components/HeaderComponent';
import Container from './components/Container';

function App() {


	const currentScreen = useSelector(state => state.screen);
	let showHeader = <HeaderComponent/>;

	let content = null;

	switch(currentScreen){
		case 'listScreen':
			content = <Container>
						<ListComponent/>
					</Container>
			break;
		case 'formScreen':
			content = <Container>
						<FormComponent/>
					</Container>
			break;
		case 'welcomeScreen':
			content = (
				<>
                    <div className="start-card-wrapper">
                        <input type="radio" id="x1" className="radio" name="x"/>
                        <label htmlFor="x1">
                            <div className="card first-card">
                                <StartCard genre={'music'}/>
                            </div>
                        </label>
                        <input type="radio" id="x2" className="radio" name="x"/>
                        <label htmlFor="x2">
                            <div className="card second-card">
                                    <StartCard genre={'books'}/>
                            </div>
                        </label>
                        <input type="radio" id="x3" className="radio" name="x" defaultChecked/>
                        <label htmlFor="x3">
                            <div className="card third-card">
                                    <StartCard genre={'movies'}/>
                            </div>
                        </label>
                    </div>
				</>
			)
			break;
		default:
			break;
	}
	return (
		<div className="App">
			{showHeader}
			{content}
		</div>
	)
}

export default App;
