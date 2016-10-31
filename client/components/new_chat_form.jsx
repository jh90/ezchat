import React from 'react';

const propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default class NewChatForm extends React.Component {
  constructor () {
    super();
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.title);
    e.target.value = '';
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='title' type='text' placeholder='Title' onChange={this.handleChange} />
        <input type='submit' />
      </form>
    );
  }
}

NewChatForm.propTypes = propTypes;
