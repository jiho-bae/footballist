import { RecoilRoot } from 'recoil';
import Router from './components/Router';
import './styles.css';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
