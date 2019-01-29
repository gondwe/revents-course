import React from 'react'
import { Label, FormField } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
// import moment from 'moment'


const DateInput = ({
    input, width, placeholder, meta: { touched, error }, ...rest }) => {
        
    return (
        <FormField width={width} error={touched && !!error}>
            <DatePicker
                {...rest}
                // {...input}
                placeholderText={placeholder}
                selected={input.value ? input.value : null}
                onChange={input.onChange}
                
            />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </FormField>
    )
}

export default DateInput