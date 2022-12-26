'use strict';

const domContainer_content = document.querySelector('#main-par2');
const domContainer_cpsc110 = document.querySelector('#par2-cpsc110');

export class Dropdowns extends React.Component {
  state = {
    options: [
      { value: 'Option 1', label: 'Option 1' },
      { value: 'Option 2', label: 'Option 2' },
      { value: 'Option 3', label: 'Option 3' },
    ],
    selectedOption: '',
  };

  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
    domContainer_content.innerHTML = domContainer_cpsc110.innerHTML;
  };

  render() {
    const dropdownStyles = {
        marginLeft: '2.5rem',
        marginTop: '2.1rem',
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
