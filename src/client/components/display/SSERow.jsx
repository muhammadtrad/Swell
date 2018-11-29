import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';

class SSERow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(e) {
    const expandable = e.target
      .closest('.response_sse')
      .getElementsByClassName('data-inner')
      .item(0);
    const expandBtn = e.target;

    expandBtn.classList.toggle('expand-active');
    expandable.classList.toggle('expanded');
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      const expandable = e.target
        .closest('.response_sse')
        .getElementsByClassName('data-inner')
        .item(0);
      const expandBtn = e.target;

      expandBtn.classList.toggle('expand-active');
      expandable.classList.toggle('expanded');
    }
  }

  render() {
    let contentBody;
    try {
      const json = JSON.parse(this.props.content.data);
      contentBody = <ReactJson src={json} name={false} displayDataTypes={false} />;
    }
    catch (err) {
      contentBody = this.props.content.data;
    }

    return (
      <div className="response_sse">
        <div className="nested-grid-4">
          <div>
            <span className="tertiary-title">
              ID
              {this.props.content.id}
            </span>
          </div>

          <div>
            <span className="tertiary-title">
              Event
              {this.props.content.event}
            </span>
          </div>

          <div>
            <span className="tertiary-title">
              Time Received
              {this.props.content.timeReceived}
            </span>
          </div>

          <div>
            <span
              role="button"
              tabIndex={0}
              onClick={e => this.handleClick(e)}
              onKeyPress={this.handleKeyPress}
              className="tertiary-title expand-btn"
            />
          </div>
        </div>

        <div className="title-row data-inner">
          <div>
            <span className="tertiary-title">
              Data
              {contentBody}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SSERow;
