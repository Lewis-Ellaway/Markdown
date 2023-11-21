import './App.css';
import React from "react"
import Markdown from 'react-markdown'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: `
  # h1 
  ## h2
  [link](https://www.example.com)
  \`inline code\`

    \`\`\` {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
   } \`\`\` 

  - a
  - short
  - list

  > blockquote
  ![alt text](https://www.google.com/logos/doodles/2023/dr-victor-changs-87th-birthday-6753651837109540.2-s.png)
  **bold text**`
    }


    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {

    const markdown = this.state.input
    const preview = (
      <div></div>
    )

    return (
      <div className="App">
        <div>
          <textarea id="editor" onChange={this.handleChange} value={this.state.input} />
          <div id="preview" ><Markdown >{markdown}</Markdown></div>
        </div>
      </div>
    );
  }
}

export default App;
