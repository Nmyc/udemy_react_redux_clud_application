import React from 'react'
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

// import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody'
// import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

class EventsIndex extends React.Component { 
  // イベント一覧を取得
  componentDidMount() {
    // actionで定義
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, (event, index) => {
      return (
        <TableRow key={ index }>
          <TableCell>{ event.id }</TableCell>
          <TableCell>
            <Link to={`/events/${event.id}`}>
              { event.title }
            </Link>
          </TableCell>
          <TableCell>{ event.body }</TableCell>
        </TableRow>
      )
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table aria-label='customized table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { this.renderEvents() }
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant='contained' color='primary' href='/events/new'>
          {/* <Link to="/events/new">New Event</Link> */}
          +
        </Button>
      </React.Fragment>
      );
    }
};

const mapStateToProps = state => ( { events: state.events } )

const mapDispatchToProps = ( { readEvents } )

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
