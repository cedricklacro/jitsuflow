import './NotesMenuPage.scss';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';

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
          <li className='menu__category' onClick={() => setSelectedCategory('all')}>all notes</li>
            {categories.map((category) => (
              <li className='menu__category' key={category.category_id} onClick={() => setSelectedCategory(category.category_id)}>{category.name}</li>
            ))}
          </ul>
        </div>
        <div className='menu__notes-list'>
          {selectedCategory ? (
            notesByCategory.length > 0 ? (
              <ul>
                {notesByCategory.map((note) => (
                  <li key={note.note_id} onClick={() => navigate(`/jitsujournal/${note.note_id}`)}>
                    <h4>{note.title}</h4>
                    <ul>
                      {note.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No notes yet</p>
            )
          ) : (
            <p>Please select a category to view notes</p>
          )}
        </div>
      </main>
    </section>
  )
}

export default NotesMenuPage