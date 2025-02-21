import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import UnderConstructionPage from './pages/others/UnderConstructionPage/UnderConstructionPage';
import NotesMenuPage from './pages/notes/NotesMenuPage/NotesMenuPage';
import NotesAddPage from './pages/notes/NotesAddPage/NotesAddPage';
import NotesDetailsPage from './pages/notes/NotesDetailsPage/NotesDetailsPage';
import NotesEditPage from './pages/notes/NotesEditPage/NotesEditPage';
import NotFoundPage from './pages/others/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UnderConstructionPage />} />
        <Route path="/jitsujournal" element={<NotesMenuPage />} />
        <Route path="/jitsujournal/add" element={<NotesAddPage />} />
        <Route path="/jitsujournal/:noteid" element={<NotesDetailsPage />} />
        <Route path="/jitsujournal/:noteid/edit" element={<NotesEditPage />} />
        <Route path="/profile" element={<UnderConstructionPage />} />
        <Route path="/flowbuilder" element={<UnderConstructionPage />} />
        <Route path="/billing" element={<UnderConstructionPage />} />
        <Route path="log-out" element={<UnderConstructionPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App