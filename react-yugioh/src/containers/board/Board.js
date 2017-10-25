import React, { Component } from 'react'


class Deck extends Component {

    constructor(){
        super()
        this.state = {
            deck_player1: [],
            deck_player2: [],
            current_hand_player1: [],
            current_hand_player2: [],
            current_turn: []
        }
    }
    //
    // componentWillMount(){
    //     this.fetchData()
    // }


    render() {
        return(
            <div className="container">
                <div className="row hand_p1">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1 hand6_p2">1</div>
                    <div className="col-sm-1 hand5_p2">1</div>
                    <div className="col-sm-1 hand4_p2">1</div>
                    <div className="col-sm-1 hand3_p2">1</div>
                    <div className="col-sm-1 hand2_p2">1</div>
                    <div className="col-sm-1 hand1_p2">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                </div>
                <div className="row spell_p2">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1 deck_p2">1</div>
                    <div className="col-sm-1 spell5_p2">1</div>
                    <div className="col-sm-1 spell4_p2">1</div>
                    <div className="col-sm-1 spell3_p2">1</div>
                    <div className="col-sm-1 spell2_p2">1</div>
                    <div className="col-sm-1 spell1_p2">1</div>
                    <div className="col-sm-1 fusion_p2">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                </div>
                <div className="row monster_p2">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1 fusion1_p2">1</div>
                    <div className="col-sm-1 monster5_p2">1</div>
                    <div className="col-sm-1 monster4_p2">1</div>
                    <div className="col-sm-1 monster3_p2">1</div>
                    <div className="col-sm-1 monster2_p2">1</div>
                    <div className="col-sm-1 monster1_p2">1</div>
                    <div className="col-sm-1 graveyard">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                </div>
                <div className="row phase">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-6">Section for phase and other info</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                </div>
                <div className="row monster_p1">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1 fusion1_p1">1</div>
                    <div className="col-sm-1 monster1_p1">1</div>
                    <div className="col-sm-1 monster2_p1">1</div>
                    <div className="col-sm-1 monster3_p1">1</div>
                    <div className="col-sm-1 monster4_p1">1</div>
                    <div className="col-sm-1 monster5_p1">1</div>
                    <div className="col-sm-1 graveyard">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                </div>
                <div className="row spell_p1">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1 fusion1_p1">1</div>
                    <div className="col-sm-1 spell1_p1">1</div>
                    <div className="col-sm-1 spell2_p1">1</div>
                    <div className="col-sm-1 spell3_p1">1</div>
                    <div className="col-sm-1 spell4_p1">1</div>
                    <div className="col-sm-1 spell5_p1">1</div>
                    <div onClick={this.props.draw} className="col-sm-1 deck_p1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                </div>
                <div className="row hand_p1">
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1 hand1_p1">1</div>
                    <div className="col-sm-1 hand2_p1">1</div>
                    <div className="col-sm-1 hand3_1">1</div>
                    <div className="col-sm-1 hand4_1">1</div>
                    <div className="col-sm-1 hand5_1">1</div>
                    <div className="col-sm-1 hand6_1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                    <div className="col-sm-1">1</div>
                </div>
            </div>
        )
    }
}

export default Deck