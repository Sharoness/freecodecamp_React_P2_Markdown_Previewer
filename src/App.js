import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import dompurify from 'dompurify';

const DEFAULT_TEXT = "abcdef"

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      text: DEFAULT_TEXT
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <textarea id="editor" value={this.state.text} onChange={this.handleChange} />
        <p id="preview">{this.state.text}</p>
      </div>
    )
  }
}

export default App;
