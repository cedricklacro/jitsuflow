import {useState} from 'react'

// MultiSelectInput Component
// This component provides a text input with a dropdown list of suggestions (filtered based on the input).
// Selected items are displayed as chips with an "x" to remove them.
function MultiSelectInput ({ label, placeholder, options, selectedItems, onAddItem, onRemoveItem }) {
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
      setShowDropdown(true);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        e.preventDefault();
        if (!selectedItems.includes(inputValue.trim())) {
          onAddItem(inputValue.trim());
        }
        setInputValue('');
        setShowDropdown(false);
      }
    };
  
    // Filter the options based on input and remove any items that have already been selected
    const filteredOptions = options.filter(
      (option) =>
        option.toLowerCase().includes(inputValue.toLowerCase()) &&
        !selectedItems.includes(option)
    );
  
    return (
      <div className="multi-select-input__multiselect">
        <label className="multi-select-input__label">{label}</label>
        <div className="multi-select-input__multiselect-input-wrapper">
          <input
            type="text"
            className="multi-select-input__input"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              // Delay hiding dropdown to allow click on options
              setTimeout(() => setShowDropdown(false), 100);
            }}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && filteredOptions.length > 0 && (
            <ul className="multi-select-input__dropdown">
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="multi-select-input__dropdown-item"
                  onMouseDown={() => {
                    onAddItem(option);
                    setInputValue('');
                    setShowDropdown(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="multi-select-input__chips">
          {selectedItems.map((item, index) => (
            <div key={index} className="multi-select-input__chip">
              {item}
              <button
                type="button"
                className="multi-select-input__chip-remove"
                onClick={() => onRemoveItem(item)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default MultiSelectInput
