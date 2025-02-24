import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'], // Formatting
    [{ list: 'ordered' }, { list: 'bullet' }], // Lists
    ['link'], // Hyperlink
  ],
};

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