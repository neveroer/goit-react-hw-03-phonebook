import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

function Filter({ value, onFilterChange }) {
  const idToFind = uuidv4();
  return (
    <div className={s.form}>
      <label className={s.label} htmlFor="filter">
        Find
      </label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => onFilterChange(e.target.value)}
        name="filter"
        placeholder="Enter smth"
        id={idToFind}
      />
    </div>
  );
}

export default Filter;
