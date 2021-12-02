import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.scss';
import ContactListItem from './ContactsListItem';

export default function Contacts({ contacts, onClick }) {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};
