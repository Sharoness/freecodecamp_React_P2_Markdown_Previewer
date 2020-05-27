import React from 'react';
import './App.css';
import marked from 'marked';
import DOMPurify from 'dompurify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DEFAULT_TEXT = `# Welcome to my React Markdown Previewer!
## This is a sub-heading
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

marked.setOptions({
  breaks: true,
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorInput: DEFAULT_TEXT
    }
    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }

  handleChange(event) {
    this.setState({
      editorInput: event.target.value
    });
  }

  getMarkdownText() {
    return {__html: marked(this.state.editorInput)};
  }

  render() {
    return (
      <Container id="container">
        <Row className="justify-content-center mb-4">
          <Col id="editorWrap" xs={6} className="p-0 mt-4 mb-3">
            <div className="bg-primary text-center font-weight-bold">Editor</div>
            <textarea className="w-100 h-100" id="editor" value={this.state.editorInput} onChange={this.handleChange} rows="10" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col id="previewWrap" className="p-0 mb-4">
            <div className="bg-primary text-center font-weight-bold">Preview</div>
            <div id="preview" className="pl-1" dangerouslySetInnerHTML={this.getMarkdownText()} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
