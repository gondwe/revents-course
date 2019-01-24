import React from 'react'
import { FormField, Input, Label } from 'semantic-ui-react';

const TextArea = ({
    input, rows, type, placeholder, meta: { touched, error }
}) => {
    return (
        <FormField rows={rows} error={touched && !!error}>
            <Input {...input} placeholder={placeholder} type={type}/>
            {touched && error && <Label basic color='red'>{error}</Label>}
        </FormField>
    )
}

export default TextArea
