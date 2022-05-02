import GridRowContainer from './components/Grid/GridRowContainer';
import Header from './components/Layout/Header';
// import KeyboardComponent from './components/Keyboard/KeyboardComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="d-flex justify-content-center">
        <GridRowContainer guessCount={5} />
      </div>
      {/* <div className='d-flex justify-content-center'>
        <KeyboardComponent />
      </div> */}
    </div>
  );
}

export default App;
