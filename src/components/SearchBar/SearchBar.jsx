import React from 'react'
import s from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.query.value.trim();
    if (value === '') {
      alert('Please enter a search query');
      return;
    }
    onSubmit(value);
    form.reset();

  }
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input type="text" name="query" autoComplete="off" autoFocus placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar