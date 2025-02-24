import './NotesForm.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MultiSelectInput from '../MultiSelectInput/MultiSelectInput';
import RichTextEditor from '../RichTextEditor/RichTextEditor';

function NotesForm({ itemData, setItemData, handleSubmit, submitButtonText }) {
  const [categories, setCategories] = useState([]);
  const [allNoteTitles, setAllNoteTitles] = useState([]);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Fetch categories and note titles
  useEffect(() => {
    const getSelections = async () => {
      try {
        const [categoriesResponse, titlesResponse] = await Promise.all([
          axios.get(`${baseUrl}/notes/categories`),
          axios.get(`${baseUrl}/notes/titles`)
        ]);
        setCategories(categoriesResponse.data);
        setAllNoteTitles(titlesResponse.data.map(item => item.title));
      } catch (error) {
        console.error('Error fetching note selections:', error);
      }
    };
    getSelections();
  }, []);

  // Ensure itemData.content is never undefined (Quill needs a valid string)
  const handleContentChange = (value) => {
    if (itemData.content !== value) {
      setItemData({ ...itemData, content: value });
    }
  };

  // Handle form submission
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!itemData.title?.trim()) {
      alert('Title cannot be empty');
      return;
    }
    if (!itemData.category_id) {
      alert('Please select a category');
      return;
    }

    const updateData = {
      title: itemData.title.trim(),
      content: itemData.content || "", // Ensure content is not undefined
      category_id: parseInt(itemData.category_id, 10),
      tags: itemData.tags || [],
      entry_paths: itemData.paths?.entry || [],
      exit_paths: itemData.paths?.exit || [],
      counter_for: itemData.paths?.counter_for || [],
      can_be_countered_by: itemData.paths?.can_be_countered_by || [],
      user_id: 1 // Hardcoded user ID for now
    };

    handleSubmit(updateData);
  };

  return (
    <div className="notes-form">
      <form className="notes-form__form" onSubmit={onFormSubmit}>
        {/* Title Input */}
        <div className="notes-form__field">
          <label className="notes-form__label" htmlFor="title">Title*</label>
          <input
            type="text"
            id="title"
            className="notes-form__input"
            value={itemData.title || ''}
            onChange={(e) => setItemData({ ...itemData, title: e.target.value })}
            required
          />
        </div>

        {/* Category Selection */}
        <div className="notes-form__field">
          <label className="notes-form__label" htmlFor="category">Category*</label>
          <select
            id="category"
            className="notes-form__select"
            value={itemData.category_id || ''}
            onChange={(e) => setItemData({ ...itemData, category_id: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.category_id} value={cat.category_id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Rich Text Editor for Content */}
        <div className="notes-form__field">
          <label className="notes-form__label" htmlFor="content">Content</label>
          <RichTextEditor
            className="notes-form__textarea"
            value={itemData.content || ''} // Ensure default value is a string
            onChange={handleContentChange}
          />
        </div>

        {/* MultiSelectInputs */}
        <MultiSelectInput label="Tags" placeholder="Add a tag" options={[]} selectedItems={itemData.tags || []}
          onAddItem={(item) => setItemData({ ...itemData, tags: [...(itemData.tags || []), item] })}
          onRemoveItem={(item) => setItemData({ ...itemData, tags: (itemData.tags || []).filter(tag => tag !== item) })}
        />

        <MultiSelectInput label="Entry Path" placeholder="Add an entry path" options={allNoteTitles}
          selectedItems={itemData.paths?.entry || []}
          onAddItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, entry: [...(itemData.paths?.entry || []), item] }
          })}
          onRemoveItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, entry: (itemData.paths?.entry || []).filter(path => path !== item) }
          })}
        />

        <MultiSelectInput label="Exit Path" placeholder="Add an exit path" options={allNoteTitles}
          selectedItems={itemData.paths?.exit || []}
          onAddItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, exit: [...(itemData.paths?.exit || []), item] }
          })}
          onRemoveItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, exit: (itemData.paths?.exit || []).filter(path => path !== item) }
          })}
        />

        <MultiSelectInput label="Counter For" placeholder="Add a counter for" options={allNoteTitles}
          selectedItems={itemData.paths?.counter_for || []}
          onAddItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, counter_for: [...(itemData.paths?.counter_for || []), item] }
          })}
          onRemoveItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, counter_for: (itemData.paths?.counter_for || []).filter(path => path !== item) }
          })}
        />

        <MultiSelectInput label="Can Be Countered By" placeholder="Add a countering note" options={allNoteTitles}
          selectedItems={itemData.paths?.can_be_countered_by || []}
          onAddItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, can_be_countered_by: [...(itemData.paths?.can_be_countered_by || []), item] }
          })}
          onRemoveItem={(item) => setItemData({
            ...itemData,
            paths: { ...itemData.paths, can_be_countered_by: (itemData.paths?.can_be_countered_by || []).filter(path => path !== item) }
          })}
        />

        {/* Form Buttons */}
        <div className="notes-form__buttons">
          <button type="button" className="notes-form__button notes-form__button--cancel" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="notes-form__button notes-form__button--submit" type="submit">
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NotesForm;
