import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
      <Container className='mt-5'>
        <BrowserRouter>
          <Routes>
            <Route element={<SearchPage />} path="/"></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
