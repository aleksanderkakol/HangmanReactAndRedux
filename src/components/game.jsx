import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Alphabet from './alphabet.jsx';
const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: this.props.choosenWord.toUpperCase(),
            letter: '',
            green: [],
            red: []
        }

        this.handleInputVaule = this.handleInputVaule.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.choosenWord !== this.props.choosenWord) {
            this.setState({
                word: nextProps.choosenWord.toUpperCase()
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.letter.length > 0) {
            let word = this.state.word.split('')
            if (word.indexOf(this.state.letter) > -1) {
                this.setState(previousState => ({
                    green: [...previousState.green, this.state.letter]
                }))
            } else {
                this.setState(previousState => ({
                    red: [...previousState.red, this.state.letter]
                }))
            }
            this.setState({
                letter: ''
            })
        }


    }

    handleInputVaule = e => {
        this.setState({
            letter: e.target.value.toUpperCase()
        })
    }

    render() {
        console.log(this.state.word)
        // let word = this.state.word;
        // console.log(word.indexOf(this.state.letter))


        // console.log(this.state.red)
        // for (let i = 0; i < word.length; i++) {
        // console.log(i)
        // }


        // let letters = <ul className="alphabet">
        //     {ALPHABET.map((item, index) =>
        //         <li id={index}
        //             className="alphabetChar"
        //             key={item}>
        //             {item}
        //         </li>
        //     )}
        // </ul>
        // console.log(letters.props.children[0])
        // this.props.choosenWord ? console.log('hej') : console.log('ty');
        return (
            <form className="form">
                {/* <label className="formLabel"> */}
                {/* Type word or one character: <input maxLength="1" onChange={this.handleInputVaule} className="formInput" placeholder="Type here" value={this.state.letter} type="text" /></label> */}
                {/* <button onClick={this.handleSubmit} type="submit" className="formSubmit button">Accept</button> */}
                <Alphabet letters={this.state.green} word={this.state.word} char={ALPHABET} />
            </form>
        );
    }
}

export default Game;