import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home/HomePage';
import OurTeamPage from './pages/OurTeamPage/OurTeam';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/team" element={<OurTeamPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
