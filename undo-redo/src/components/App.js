import React from 'react';
import { Container } from 'semantic-ui-react';
import Editor from './Editor';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Editor />
      </Container>
    );
  }
}

export default App;