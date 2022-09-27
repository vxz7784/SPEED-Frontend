import { Route, Routes, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ViewArticles from './pages/ViewArticles';
import SubmitArticle from './pages/SubmitArticle';
import Moderator from './pages/Moderator';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <ul className="header">
              <li><NavLink exact to = "/">Home</NavLink></li>
              <li><NavLink exact to = "/submit">Submit Article</NavLink></li>
              <li><NavLink exact to = "/articles">Articles</NavLink></li>
              <li><NavLink exact to = "/moderator">Moderator</NavLink></li>
            </ul>
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path="/articles" element={<ViewArticles/>}/>
              <Route exact path="/submit" element={<SubmitArticle/>}/>
              <Route exact path="/moderator" element={<Moderator/>}/>
              <Route exact path="/404" element={<NotFound/>}/>
              <Route path="*" element={<Navigate to="/404" replace />}/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
  );
}

export default App;