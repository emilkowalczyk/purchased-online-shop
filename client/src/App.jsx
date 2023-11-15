import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Home />} />
        <Route path='/favorites' element={<Home />} />
        <Route path='/profile' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
