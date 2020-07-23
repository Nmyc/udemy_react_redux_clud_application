import React from 'react'
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'

class EventsIndex extends React.Component { 
  // イベント一覧を取得
  componentDidMount() {
    // actionで定義
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, (event, index) => {
      return (
        <tr key={ index }>
          <td>{ event.id }</td>
          <td>{ event.title }</td>
          <td>{ event.body }</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          { this.renderEvents() }
        </tbody>
      </table>);
    }
};

const mapStateToProps = state => ( { events: state.events } )

const mapDispatchToProps = ( { readEvents } )

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
