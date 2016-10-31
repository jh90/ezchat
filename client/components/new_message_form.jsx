import React from 'react';

const propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default class NewMessageForm extends React.Component {
  constructor () {
    super();
    this.state = {
      body: '',
      alias: '',
    };
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}

NewMessageForm.propTypes = propTypes;
