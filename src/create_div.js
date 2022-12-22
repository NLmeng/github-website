'use strict';

export class CreateDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: [],
      inputValue: ''
    };
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSaveButtonClick() {
    const { divs, inputValue } = this.state;
    this.setState({
      divs: [...divs, inputValue],
      inputValue: ''
    });
  }

  render() {

    const divStyles = {
      border: '1px solid black',
      padding: '5px 20px 5px 20px',
      borderRadius: '20px',
      transform: this.state.hovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.2s ease-in-out',
      backgroundColor: this.state.hovered ? 'rgba(115,139,230,0.7)' : 'white'
    }

    return (
      React.createElement(
        'div', {
          // style: divStyles,
        },
        React.createElement(
          'input', {
            type: 'text',
            value: this.state.inputValue,
            onChange: event => this.handleInputChange(event)
          },),
        React.createElement(
          'button', { 
            onClick: () => this.handleSaveButtonClick() 
          }, 'Save'),
        this.state.divs.map(div => (React.createElement('div', { key: div, style: divStyles, }, div)))
      )
    );
  }
}
