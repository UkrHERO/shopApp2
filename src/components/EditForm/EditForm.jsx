import React, { useEffect, useState } from 'react';
import './EditForm.module.css';
import { editProductById } from '../../api/api';

function EditForm({ onClose, product }) {
  const [formData, setFormData] = useState({ ...product });

  useEffect(() => {
    setFormData({
      ...product,
    });
  }, [product]);
  const handleSubmit = e => {
    e.preventDefault();
    editProductById(formData);
    onClose();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...product,
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

      <button type="submit">Confirm</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

export default EditForm;
