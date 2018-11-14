import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import * as actions from './actions/actions.jsx';
import { reducer } from './reducer/reducer.jsx';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { getDataFailed } from "./actions/actions.jsx";
import Game from "./components/game.jsx";

let errorWord = "Hangman";

require('./style/main.scss');

const store = createStore(
    reducer,
    { isLoading: true, isError: false, words: [] },
    applyMiddleware(thunk)
);

class Main extends React.Component {

    componentDidMount() {
        const { getData } = this.props;
        getData();
    }

    render() {
        const { isLoading, isError, words } = this.props;

        let randomNumberFromWordsArray = Math.floor(Math.random() * words.length);
        let choosenWord = !isLoading ? words[randomNumberFromWordsArray].word : errorWord;

        return (
            <main>
                <h1 className='title'>Hangman Game</h1>
                <h2 className="lives"></h2>
                <Game choosenWord={choosenWord} />
            </main>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchProps = dispatch => {
    return {
        getData: () => dispatch(actions.getData())
    }
};

//connect to component
Main = connect(mapStateToProps, mapDispatchProps)(Main);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider store={store}>
            <Main />
        </Provider>,
        document.getElementById('app')
    );
});