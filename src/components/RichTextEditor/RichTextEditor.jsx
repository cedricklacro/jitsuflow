import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const modules = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline'], // Formatting
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      ['link', 'image'], // Add Image Upload Button
    ],
    handlers: {
      image: imageHandler, // Custom image handler
    },
  },
};

// Custom Image Upload Handler
function imageHandler() {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      // ✅ Upload image to backend API
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const imageUrl = response.data.url; // Get uploaded image URL

      // ✅ Insert uploaded image into Quill editor
      const quill = this.quill; // Access Quill instance
      const range = quill.getSelection();
      quill.insertEmbed(range.index, 'image', imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
}

function RichTextEditor({ value, onChange }) {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
    />
  );
}

export default RichTextEditor;
