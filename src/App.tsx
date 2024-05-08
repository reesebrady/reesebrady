import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import ArtworkPage from './components/ArtworkPage';
import Paintings from './components/Paintings';
import Drawings from './components/Drawings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="paintings" element={<Paintings />} />
          <Route path="drawings" element={<Drawings />} />
          <Route path=":page/:id" element={<ArtworkPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//npm run dev