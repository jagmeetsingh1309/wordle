import React from 'react';
import './App.css';
import GridRowContainer from './components/Grid/GridRowContainer';
import Header from './components/Layout/Header';
import { getRandomWord } from './components/Utility/RestService';
// import KeyboardComponent from './components/Keyboard/KeyboardComponent';

class App extends React.Component {

  state = {
    currentWord: '',
    guessCount: 5,
    wordLenght: 5
  }

  componentDidMount = () => {
    getRandomWord()
      .then(result => {
        this.setState({
          ...this.state,
          currentWord: result.word
        });
    });
  }

  render = () => {
    console.log(this.state.currentWord);

    return (
      <div className='App'>
        <Header />
        <div className="d-flex justify-content-center">
          <GridRowContainer currentWord={this.state.currentWord} guessCount={this.state.guessCount} />
        </div>
        {/* <div className='d-flex justify-content-center'>
          <KeyboardComponent />
        </div> */}
      </div>
    );
  }
}

export default App;
