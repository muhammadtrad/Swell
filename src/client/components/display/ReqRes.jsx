import React, { Component } from 'react';
import { connect } from 'react-redux';
import Request from './Request.jsx';
import Response from './Response.jsx';

import * as actions from '../../actions/actions';

const mapStateToProps = store => ({
 
});

const mapDispatchToProps = dispatch => ({

});

class ReqRes extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let contentBody = [];
    contentBody.push(<Request content={this.props.content.request}/>);
    if (this.props.content.connection !== 'uninitialized') {
      contentBody.push(<Response content={this.props.content.response}/>)
    };

    return(
      <div style={{'border' : '1px solid black', 'margin' : '3px', 'display' : 'flex', 'flexDirection' : 'column'}}>
        {this.props.content.id}
        {this.props.content.url}
        {this.props.content.timeSent}
        {this.props.content.timeReceived}
        {this.props.content.connectionType}
        {contentBody}
        <button>Send</button>
        <button>Close</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReqRes);