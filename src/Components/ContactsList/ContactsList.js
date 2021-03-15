import s from './ContactsList.module.css';

function ContactList({ data, onButtonClick }) {
  return (
    <ul>
      {data.map(({ id, name, number }) => (
        <li className={s.listItem} key={id}>
          {name} ~ {number}
          <button
            className={s.button}
            id={id}
            onClick={() => onButtonClick(id)}
          >
            {' '}
            Delete{' '}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
