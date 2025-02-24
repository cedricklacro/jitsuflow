import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import UnderConstructionPage from './pages/others/UnderConstructionPage/UnderConstructionPage';
import NotesMenuPage from './pages/notes/NotesMenuPage/NotesMenuPage';
import NotesAddPage from './pages/notes/NotesAddPage/NotesAddPage';
import NotesDetailsPage from './pages/notes/NotesDetailsPage/NotesDetailsPage';
import NotesEditPage from './pages/notes/NotesEditPage/NotesEditPage';
import NotFoundPage from './pages/others/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import HomePage from './pages/others/HomePage/HomePage';
import ProfilePage from './pages/others/ProfilePage/ProfilePage';
import FlowBuilder from './pages/others/FlowBuilderPage/FlowBuilderPage';
import BillingPage from './pages/others/BillingPage/BillingPage';
import LogoutPage from './pages/others/LogoutPage/LogoutPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jitsujournal" element={<NotesMenuPage />} />
        <Route path="/jitsujournal/add" element={<NotesAddPage />} />
        <Route path="/jitsujournal/:noteid" element={<NotesDetailsPage />} />
        <Route path="/jitsujournal/:noteid/edit" element={<NotesEditPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/flowbuilder" element={<FlowBuilder />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="log-out" element={<LogoutPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App