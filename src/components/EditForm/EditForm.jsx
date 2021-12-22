import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EditForm.module.css';

function EditForm({ onSubmit, onClose, product }) {
  const [formData, setFormData] = useState({ ...product });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...formData });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    // setFormData({
    //   [name]: value,
    //   // ...formData,
    // });
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

      <button type="submit">Confirm</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

EditForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default EditForm;
