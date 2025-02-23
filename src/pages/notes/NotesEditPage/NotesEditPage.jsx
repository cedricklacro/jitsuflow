import './NotesEditPage.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NotesForm from '../../../components/NotesForm/NotesForm';

function NotesEditPage() {
  const [noteDetails, setNoteDetails] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const params = useParams();
  const navigate = useNavigate();

  // Fetch note details (including transforming paths) from the backend
  const getNoteDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/notes/${params.noteid}`);
      const data = response.data;
      setNoteDetails({
        ...data,
        tags: data.tags || [],
        // Transform paths arrays into arrays of strings for the form
        paths: {
          entry: data.paths?.entry ? data.paths.entry.map(item => item.title) : [],
          exit: data.paths?.exit ? data.paths.exit.map(item => item.title) : [],
          counter_for: data.paths?.counter_for ? data.paths.counter_for.map(item => item.title) : [],
          can_be_countered_by: data.paths?.can_be_countered_by ? data.paths.can_be_countered_by.map(item => item.title) : [],
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNoteDetails();
  }, [params.noteid]);

  // This function receives the built updateData from NotesForm after validation.
  const handleSubmit = async (updateData) => {
    try {
      await axios.put(`${baseUrl}/notes/${params.noteid}`, updateData);
      navigate(`/jitsujournal/${params.noteid}`);
    } catch (error) {
      console.error('Error updating note details:', error);
    }
  };

  return (
    <section className="edit-note">
      <PageHeader title={`Edit Note: ${noteDetails.title || ''}`} type="withback" />
      <NotesForm
        itemData={noteDetails}
        setItemData={setNoteDetails}
        handleSubmit={handleSubmit}
        submitButtonText="Edit Note"
      />
    </section>
  );
}

export default NotesEditPage;
