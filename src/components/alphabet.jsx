import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Alphabet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lookingWord: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        let arrWord = this.props.word.split('');

        e.currentTarget.setAttribute("disabled", "disabled")
        if (this.props.word.indexOf(e.currentTarget.value) > -1) {
            this.setState({
                lookingWord: [...this.state.lookingWord, e.currentTarget.value]
            });
            let arrWords = arrWord.filter((item, pos) => {
                return arrWord.indexOf(item) == pos;
            })

        }
    }

    render() {
        // console.log(this.state.lookingWord)
        let arrWord = this.props.word.split('');

        let arrWords = arrWord.filter((item, pos) => {
            return arrWord.indexOf(item) == pos;
        })
        let sorted = arrWords.sort();
        let newWord = [].concat(this.state.lookingWord)
            .sort()

        if (sorted.toString() === newWord.toString()) {
            alert(`YOU WON! hidden word was ${this.props.word}`)
        }
        return (

            <div className="alphabet" >
                {
                    this.props.char.map((item, index) =>
                        < button onClick={this.handleClick} id={index}
                            className={`alphabetChar `}
                            key={item}
                            value={item}
                            disabled={this.state.disable}>
                            {item}
                        </button>
                    )
                }
            </div >
        );
    }
}

export default Alphabet;