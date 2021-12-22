import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddForm.module.css';
const INITIAL_STATE = {
  name: '',
  count: '',
  imageUrl: '/',
  width: '',
  height: '',
  weight: '',
  comments: '',
};

function AddForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...formData });
    setFormData({ ...INITIAL_STATE });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { name, count, width, height, weight, comments } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        count
        <input
          type="text"
          name="count"
          value={count}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        width
        <input
          type="text"
          name="width"
          value={width}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        height
        <input
          type="text"
          name="height"
          value={height}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        weight
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        comments
        <input
          type="textarea"
          name="comments"
          value={comments}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Add product</button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </form>
  );
}

AddForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddForm;
