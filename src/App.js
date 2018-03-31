import React, { Component } from "react";
import Tile from "./components/Tile";
import Header from "./components/Header";
import { Col, Row, Container } from "./components/Grid";
import characters from "./characters.json";

class App extends Component { 
	state = {
		"characters": characters,
		"score": 0,
		"hiscore": 0,
		"message": "Click A Veggie!"
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
			});
			if(this.state.score > this.state.hiscore) {
				this.setState({hiscore: this.state.score});
			}
			this.setState({score: 0});
			this.setState({message: "GAME OVER!"});
		}
		else {
			for (var i = 0; i < characters.length; i++) {
				if (characters[i].id === id) {
					characters[i].clicked = true;
					var a = Math.floor(Math.random() * 12)
					var b = characters[i];
					characters[i] = characters[a];
					characters[a] = b;
				}
			}
			this.setState({score: this.state.score + 1});
			this.setState({message: "Click A Veggie!"});
		}
		this.setState({ characters });
	};

	render() {
		return (
			<Container>
				<Header message={this.state.message} score={this.state.score} hiscore={this.state.hiscore} />
				<Tile characters={characters} selectCard={this.selectCard} />
			</Container>
		);
	}
}
export default App;
