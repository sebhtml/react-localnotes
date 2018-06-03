import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
		<div>
			<div class="new-button">
				<span class="plus" id="createNew">+</span>
				<span class="text">New</span>
			</div>
			<div id="past">
				<h1>Recently written</h1> 
				<div id="history-previous"></div>
				<div id="history-next"></div>
			</div>
			<div id="container">
				<h1 id="today"></h1>
				<textarea id="maintext" class="writehere placeholder" autofocus="true">
					Start writing...
				</textarea>
				<div class="notifications">
					<p id="message">&nbsp;</p>
					<p id="autosave">&nbsp;</p>
				</div>
			</div>
		</div>
		<button id="donewriting" class="action">Done for now</button>
		<div id="taglist"></div>
        </div>
    );
  }
}

export default App;
