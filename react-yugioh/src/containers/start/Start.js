import React, { Component } from 'react'
import GamesModel from '../../models/Game.js'
import Game from '../game/Game.js'
import './Start.css';

class Start extends Component {

    constructor(){
        super()
        this.state = {
            game_been_clicked: false,
            available_games: [],
            selected_id: ""
        }
    }

    componentWillMount(){
        this.fetchData()
    }

    fetchData(){
        GamesModel.all().then((res) => {
            this.setState({
                available_games: res.data
            })
        })
    }

    startGame(e) {

        this.setState({
            selected_id: e.target.innerHTML.split(" ")[1]
        })
    }

    render() {

        return (
            <div>
            {!this.state.game_been_clicked ?
                this.state.available_games.map((game) => {
                    return(
                        <button onClick={this.startGame.bind(this)}>Game {game.id}</button>
                    )
                }) : ""}
                {this.state.selected_id ?
                    <Game
                        game_id={this.state.selected_id}
                    /> : ""
                }
            </div>
        )
    }
}

export default Start