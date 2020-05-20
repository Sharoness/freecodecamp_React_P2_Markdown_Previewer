import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import DOMPurify from 'dompurify';

const DEFAULT_TEXT = `# H1 Header 
## Subheader
Here's a link [Marked](https://marked.js.org/#/README.md) - marked.js

Inline code \`<div>Some code here</div>\` goes here

Code block:
\`\`\`sh 
$ cd dillinger
$ npm install -d
$ node app
\`\`\`
* Unordered list item
* Another unordered list item
1 Ordered sub-list item
2 Another ordered sub-list item

#### Blockquote header
> Throw in a blockquote
> still blockquoting

Here's an image:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

**This is bold text**

Bigger image:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;



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
      <div>
        <textarea id="editor" value={this.state.editorInput} onChange={this.handleChange} />
        <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
      </div>
    )
  }
}

export default App;
