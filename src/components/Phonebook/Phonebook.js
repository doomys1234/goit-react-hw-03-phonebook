import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './Phonebook.module.scss';

class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  contactId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.clearForm(e);
  };

  clearForm = e => {
    this.setState({
      name: '',
      number: '',
    });
  };

  checkContact = e => {
    console.log(this.state);
  };

  render() {
    return (
      <form
        className={s.form}
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <h3 className={s.title}>Name</h3>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <h3 className={s.title}>Number</h3>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
