import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import { HashRouter as Router, Routes } from 'react-router-dom'
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <Router>
      <main className='my-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Homescreen />} />
          </Routes>
        </Container>

      </main>

    </Router>
  );
}

export default App;
