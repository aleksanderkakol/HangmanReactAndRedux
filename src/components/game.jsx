import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: this.props.choosenWord.toUpperCase()
        }
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

    }

    handleInputVaule = e => {
        console.log(e.target.value)
    }

    render() {
        console.log(this.state)

        let letters = <ul className="alphabet">
            {ALPHABET.map(item =>
                <li className="alphabetChar"
                    key={item}>
                    {item}
                </li>
            )}
        </ul>

        // this.props.choosenWord ? console.log('hej') : console.log('ty');
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <label className="formLabel">
                    Type word or one character: <input maxLength="1" onChange={this.handleInputVaule} className="formInput" placeholder="Type here" type="text" /></label>
                <button type="submit" className="formSubmit button">Accept</button>
                {letters}
            </form>
        );
    }
}

export default Game;