import GridRowContainer from './components/GridRowContainer';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="d-flex justify-content-center">
        <GridRowContainer />
      </div>
    </div>
  );
}

export default App;
