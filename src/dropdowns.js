'use strict';
import Context from "./state.js";


const context = new Context('MAIN');

export class Dropdowns extends React.Component {

  state = {
    options: [
      { value: 'MAIN', label: 'Select' },
      { value: '110', label: 'CPSC 110' },
      { value: '121', label: 'CPSC 121' },
      { value: '210', label: 'CPSC 210' },
      { value: '213', label: 'CPSC 213' },
      { value: '310', label: 'CPSC 310' },
      { value: '320', label: 'CPSC 320' },
      { value: '330', label: 'CPSC 330' },
    ],
    selectedOption: '',
  };

  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
    context.setState(event.target.value);
    context.display();
  };

  render() {
    const dropdownStyles = {
        marginLeft: '2.5rem',
        marginTop: '2rem',
        border: '1px solid white',
        padding: '2.5px 20px 2.5px 1px',
        borderRadius: '10px',
        backgroundColor: this.state.hovered ? 'rgba(115,139,230,0.7)' : 'rgba(115,139,230,0.9)',
        color: this.state.hovered? 'black' : 'white',
      }

    const options = this.state.options.map((option) => {
      return React.createElement(
        'option', { 
            key: option.value, 
            value: option.value 
        },
        option.label
      );
    });

    return React.createElement(
      'select', { 
            value: this.state.selectedOption,
            onChange: this.handleChange,
            onMouseEnter: () => this.setState({ hovered: true }),
            onMouseLeave: () => this.setState({ hovered: false }),
            style: dropdownStyles,
        },
      options
    );
  }
}
