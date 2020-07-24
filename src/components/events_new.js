import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import { postEvents } from '../actions'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class EventsNew extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field
        return (
            <TextField
                placeholder={label} 
                label={label}
                type={type}
                error = {!!(touched && error)}
                helperText={touched && error}
                {...input}
            />
        )
    }

    async onSubmit(values) {
        await this.props.postEvents(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props

        const style = { margin: 12 }

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="Title" name="title" type="text" component={this.renderField}/>
                </div>
                <div>
                    <Field label="Body" name="body" type="text" component={this.renderField}/>
                </div>
                <Button
                    type='submit'
                    disabled={pristine || submitting || invalid}
                    color='primary'
                    variant='contained'
                >Submit</Button>
                <Button
                    href='/'
                    color='inherit'
                    style={style}
                    variant='contained'
                >Cancel</Button>
            </form>
        )
    }
}

const validate = values => {
    const errors = {}

    if (!values.title) errors.title = "Enter a title, please."
    if (!values.body) errors.body = "Enter a body, please."
    
    return errors
}

const mapDispatchToProps = ( { postEvents } )

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)