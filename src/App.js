import { CityProvider } from './cityContext';
import Page from './components/page/page';
import './App.css';

function App() {

  return (

    <CityProvider>
      <div className='App' >
        <Page />
      </div>
    </CityProvider>
  );
}

export default App;
