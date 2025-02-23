import './NotesAddPage.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NotesForm from '../../../components/NotesForm/NotesForm';

function NotesAddPage() {
  const [itemData, setItemData] = useState({
    title: '',
    category_id: '',
    content: '',
    tags: [],
    paths: {
      entry: [],
      exit: [],
      counter_for: [],
      can_be_countered_by: []
    }
  });

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async (newNote) => {
    try {
      const response = await axios.post(`${baseUrl}/notes`, newNote);
      navigate(`/jitsujournal/${response.data.note_id}`);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <section className="add-note">
      <PageHeader title="Add New Note" type="withback" />
      <NotesForm
        itemData={itemData}
        setItemData={setItemData}
        handleSubmit={handleSubmit}
        submitButtonText="Add Note"
      />
    </section>
  );
}

export default NotesAddPage;
