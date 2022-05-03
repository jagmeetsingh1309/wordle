import React, { createRef } from 'react';
import './App.css';
import GridRowContainer from './components/Grid/GridRowContainer';
import HelpModal from './components/Layout/HelpModal';
import Header from './components/Layout/Header';
import { getRandomWord } from './components/Utility/RestService';
// import KeyboardComponent from './components/Keyboard/KeyboardComponent';

class App extends React.Component {

  grid = createRef();

  state = {
    currentWord: '',
    wordGuessed: '',
    currentScore: 0,
    showStat: false,
    showHelpModal: false,
    guessCount: 5,
    wordLength: 5
  }

  componentDidMount = () => {
    getRandomWord().then(result => this.setState({...this.state,currentWord: result.word}));
    document.addEventListener("keydown",this.handleKeyDown);
  }

  handleKeyDown = ({key,keyCode}) => {
    let { wordGuessed,currentWord } = this.state;
    if(keyCode >= 65 && keyCode <= 90){
      // key is alphabet
      this.setState({
        ...this.state,
        wordGuessed: wordGuessed.concat(key)
      });
      this.grid.current.handleAlphabetValue(key);
    } else if(keyCode === 8){
        // key is backspace
        this.grid.current.handleBackSpaceValue();
        this.setState({
          ...this.state,
          wordGuessed: wordGuessed.slice(0,-1)
        });
    }
    else if(keyCode === 13){
        // key is enter
        console.log("currentWord:",currentWord,"wordGuessed:",wordGuessed);
        this.grid.current.handleEnterKey(currentWord,wordGuessed);
        this.setState({...this.state,wordGuessed:''});
        if(currentWord === wordGuessed){
          this.setState({
            ...this.state,
            currentScore: this.state.currentScore+1,
            showStat: true
          })
        }
    }
  }

  handleNextWord = () => {
    getRandomWord().then(result => this.setState({...this.state,currentWord: result.word}));
    this.grid.current.resetContainer();
    this.setState({
      ...this.state,
      wordGuessed: '',
      showStat: false
    });
  }

  toggleHelpModal = () => {
    console.log("toggleHelpModal clicked");
    this.setState({...this.state,showHelpModal: !this.state.showHelpModal });
  }

  render = () => {
    let { currentWord,guessCount,wordLength,showHelpModal } = this.state;
    return (
      <div className='App'>
        { showHelpModal && <HelpModal showModal={showHelpModal} toggleHelpModal={this.toggleHelpModal} />}
        <Header toggleHelpModal={this.toggleHelpModal} />
        <div className="d-flex justify-content-center">
          <GridRowContainer 
            ref={this.grid}
            currentWord={currentWord} 
            guessCount={guessCount}
            wordLength={wordLength} 
          />
        </div>
        {
          this.state.showStat && <div className='d-flex justify-content-center'>
            <div>
              <h6>Current Score: {this.state.currentScore}</h6>  
              <button onClick={this.handleNextWord} className='btn btn-success'>Next Word</button>      
            </div>
          </div>
        }
        
        {/* <div className='d-flex justify-content-center'>
          <KeyboardComponent />
        </div> */}
      </div>
    );
  }
}

export default App;
