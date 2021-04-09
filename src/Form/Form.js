import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
    
  };
  //генерируем id для контакта
    // let contactId = shortid.generte();
    
    
    //унифицированный метод, обновляющий стейт 
  handleChange = event => {
      const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    };
    
    //метод отправки формы
  handleSubmit = event => {
      event.preventDefault();
      
      // const contact = {        //формирование контакта
      //     id: shortid.generte(),
      //     name: this.state.name,
      //     number: this.state.number,
      // };
        this.props.onSubmit(this.state);
    this.reset();
    };
    
    //очистка формы
  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };
    render() {
      
    return (
      <form onSubmit={this.handleSubmit}>
        <label >
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label >
          Number{' '}
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
                       pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;