import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage';
import NotesMenuPage from './pages/notes/NotesMenuPage/NotesMenuPage';
import NotesAddPage from './pages/notes/NotesAddPage/NotesAddPage';
import NotesDetailsPage from './pages/notes/NotesDetailsPage/NotesDetailsPage';
import NotesEditPage from './pages/notes/NotesEditPage/NotesEditPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstructionPage />} />
        <Route path="/jitsuflow" element={<NotesMenuPage />} />
        <Route path="/jitsuflow" element={<NotesAddPage />} />
        <Route path="/jitsuflow/:noteid" element={<NotesDetailsPage />} />
        <Route path="/jitsuflow/:noteid/edit" element={<NotesEditPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App