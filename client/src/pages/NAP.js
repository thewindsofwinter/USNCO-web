import React, {useState} from 'react';
import '../App.css';

//Components
import NavBar from '../components/NavBar';
import PageContents from '../components/PageContents';
import NAPTable from '../components/NAPTable';
import Footer from '../components/Footer';

const NAP = () => {
	return (
		<div className="App">
			<NavBar page="NAP"/>

			<PageContents page="nap"/>
			<NAPTable/>

			<Footer/>
		</div>
	)
}

export default NAP;
