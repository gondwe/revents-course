import React from 'react'
import { FormField, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'


const DateInput = ({
    input, width, placeholder, meta: { touched, error }, ...rest }) => {
        
    return (
        <FormField width={width} error={touched && !!error}>
            <DatePicker
                {...rest}
                // {...input}
                placeholderText={placeholder}
                selected={input.value ? moment(input.value,'yyyy-mm-dd HH:mm') : null}
                onChange={input.onChange}
            />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </FormField>
    )
}

export default DateInput