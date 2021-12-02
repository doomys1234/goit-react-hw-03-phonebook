import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.scss';
export default function ContactListItem({ id, name, number, onClick }) {
  return (
    <li className={s.item}>
      {name}:<span className={s.span}>{number}</span>
      <button type="button" className={s.button} onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};
