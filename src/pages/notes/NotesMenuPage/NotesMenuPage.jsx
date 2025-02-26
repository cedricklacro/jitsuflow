import './NotesMenuPage.scss';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import editicon from '../../../assets/icons/edit-icon.svg'

function NotesMenuPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notesByCategory, setNotesByCategory] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}/notes/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching note categories:", error);
    }
  };

  const getNotesByCategory = async () => {
    try {
      const response = await axios.get(`${baseUrl}/notes/category/${selectedCategory}`);
      setNotesByCategory(response.data);
    } catch (error) {
      console.error("Error fetching notes", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getNotesByCategory();
    }
  }, [selectedCategory]);

  return (
    <section className='menu'>
      <PageHeader title="Jitsu Journal" type='notemenu' />
      <main className='menu__main-container'>
        <div className='menu__categories-container'>
          <h2 className='menu__cat-title'>Categories</h2>
          <ul className='menu__category-list'>
            <li className='menu__category' onClick={() => setSelectedCategory('all')}>All Notes</li>
            {categories.map((category) => (
              <li className='menu__category' key={category.category_id} onClick={() => setSelectedCategory(category.category_id)}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className='menu__notes-list'>
          <h2 className='menu__cat-title'>Notes List</h2>
          {selectedCategory ? (
            notesByCategory.length > 0 ? (
              <ul className='notes-list'>
                {notesByCategory.map((note) => (
                  <li className='notes-list__item' key={note.note_id} onClick={() => navigate(`/jitsujournal/${note.note_id}`)}>
                    <div className='notes-list__left-container'>
                      <h4 className='notes-list__title'>{note.title}</h4>
                      <ul className='notes-list__tags-container'>
                        {note.tags.map((tag, index) => (
                          <li className='notes-list__tag' key={index}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                    <img className='notes-list__editicon' src={editicon} alt='edit icon' onClick={() => navigate(`/jitsujournal/${note.note_id}/edit`)} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className='notes-list__info'>No notes yet</p>
            )
          ) : (
            <p className='notes-list__info'>Please select a category to view notes</p>
          )}
        </div>
      </main>
    </section>
  )
}

export default NotesMenuPage