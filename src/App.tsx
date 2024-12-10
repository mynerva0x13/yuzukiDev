import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Main from './pages/Main/index.tsx';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>

      <div className="scraper1 scraper"></div> {/* Removed duplicate ID */}
      <div className="scraper2 scraper"></div> {/* Removed duplicate ID */}

      <Helmet>
        <script src="/script/snow.js"></script> {/* Adjusted script path */}
      </Helmet>
    </HelmetProvider>
  );
}

export default App;
