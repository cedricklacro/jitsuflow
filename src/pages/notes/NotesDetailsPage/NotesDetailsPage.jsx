import './NotesDetailsPage.scss';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NoteCommentForm from '../../../components/NoteCommentForm/NoteCommentForm';
import axios from 'axios';

function NotesDetailsPage() {
  const [noteDetails, setNoteDetails] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const params = useParams();
  const navigate = useNavigate();

  const getNoteDetails = async () => {
    try {
      const response = await axios.get(`${baseUrl}/notes/${params.noteid}`);
      setNoteDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNoteDetails(params.noteid);
  }, [params.noteid]);

  return (
    <>
      <main className='page'>
        <PageHeader title={noteDetails.title} type="notedetails" id={params.noteid} />
        <section className='note'>
          <div className='note__left-container'>
            <span className='note__category-container'>
              <h4 className='note__category-label'>CATEGORY:</h4>
              <p className='note__label'>{noteDetails.category_name}</p>
            </span>
            <span className='note__content' dangerouslySetInnerHTML={{ __html: noteDetails.content }} />
          </div>
          <div className='note__right-container'>
            <span className='note__tags-container'>
              <h4 className='note__label'>TAGS: </h4>
              {noteDetails.tags && noteDetails.tags.map((tag, index) => (
                <li className='note__tag' key={index}>{tag}</li>
              ))}
            </span>
            {noteDetails.paths && (
              <div className="note__paths-container">
                <h4 className='note__label--path'>PATHS: </h4>
                {["entry", "exit", "counter_for", "can_be_countered_by"].map((pathType) => (
                  <div key={pathType} className={`note__path-box`}>
                    <h4 className='note__label'>
                      {pathType
                        .split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                    </h4>
                    <ul className='note__paths'>
                      {noteDetails.paths[pathType] && noteDetails.paths[pathType].length > 0
                        ? noteDetails.paths[pathType].map((path, index) => (
                          <li key={index} className="note__path" onClick={() => navigate(`/jitsujournal/${path.note_id}`)} >
                            {path.title}
                          </li>
                        ))
                        : <li className="note__path--empty">
                          <p>Nothing was set</p>
                        </li>
                      }
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <NoteCommentForm noteid={params.noteid} />
      </main>
    </>
  )
}

export default NotesDetailsPage
