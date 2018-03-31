import React, { Component } from "react";
import Tile from "./components/Tile";
import { Col, Row, Container } from "./components/Grid";
import characters from "./characters.json";

class App extends Component { 
	state = {
		characters
	};

	getCharacter = function (array, id) {
		return array.filter(array => array.id === id);
	};

	selectCard = id => {
		console.log(this.state);
		var thisCharacter = this.getCharacter(characters, id);

		if(thisCharacter[0].clicked) {
			characters.map(characters => {
				characters.clicked = false;
			}
			);
		}
		else {
			for (var i = 0; i < characters.length; i++) {
				if (characters[i].id === id) {
					characters[i].clicked = true;
					var a = Math.floor(Math.random() * 12 + 1)
					var b = characters[i];
					characters[i] = characters[a];
					characters[a] = b;
				}
			}
		}
		this.setState({ characters });
	};

	render() {
		return (
			<Container>
				<Tile characters={characters} selectCard={this.selectCard} />
			</Container>
		);
	}
}
export default App;
