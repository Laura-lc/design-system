/**
 * Render the JSON documentation generated by react-docgen
 */

import React from 'react';
import ReactPropsDoc from './ReactPropsDoc';

class ReactComponentDoc extends React.Component {
  render() {
    return (
      <div>
        <h3>React</h3>
        <code>{`<${this.props.displayName}>`}</code>
        {this.props.path}

        <p>{this.props.description}</p>
        <ReactPropsDoc propDocs={this.props.propDocs} />
      </div>
    );
  }
}

ReactComponentDoc.propTypes = {
  path: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  displayName: React.PropTypes.string,
  propDocs: React.PropTypes.object
};

export default ReactComponentDoc;
