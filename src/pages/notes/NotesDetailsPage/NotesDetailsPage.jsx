import './NotesDetailsPage.scss';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import NoteCommentForm from '../../../components/NoteCommentForm/NoteCommentForm';
import axios from 'axios';
import editicon from '../../../assets/icons/edit-icon.svg'


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
    getNoteDetails();
  }, [params.noteid]);

  return (
    <section>
      <PageHeader title={noteDetails.title} type="withback"/>
      <main className='note'>
        <img className='note__editicon' src={editicon} onClick={() => navigate(`/jitsujournal/${params.noteid}/edit`)} alt='edit icon' />
        <span className='note_content'>{noteDetails.content}</span>
        {noteDetails.tags && noteDetails.tags.map((tag, index) => (
          <li className='note__tags' key={index}>{tag}</li>
        ))}
        {/* paths here */}
        {noteDetails.paths && (
          <div className="note__paths">
            {["entry", "exit", "counter_for", "can_be_countered_by"].map((pathType) => (
              <div key={pathType} className={`note__path-${pathType}`}>
                <h4>
                  {pathType
                    .split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </h4>
                {noteDetails.paths[pathType] && noteDetails.paths[pathType].length > 0 ? (
                  <ul>
                    {noteDetails.paths[pathType].map((path, index) => (
                      <li key={index}>
                        <span 
                          className="clickable-path" 
                          style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
                          onClick={() => navigate(`/jitsujournal/${path.note_id}`)}
                        >
                          {path.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nothing was set</p>
                )}
              </div>
            ))}
          </div>
        )}
        <NoteCommentForm noteid={params.noteid}/>
      </main>
    </section>
  )
}

export default NotesDetailsPage
