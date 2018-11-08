import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import * as actions from './actions/actions.jsx';
import { reducer } from './reducer/reducer.jsx';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { getDataFailed } from "./actions/actions.jsx";

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
        console.log(this.props)
        const { isLoading, isError, words } = this.props;
        if (!this.props.isLoading) {
            let randomNumberFromWordsArray = Math.floor(Math.random() * words.length);
            let choosenWord = words[randomNumberFromWordsArray];
            console.log(choosenWord.word);
        }

        return (
            <main>
                hi
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