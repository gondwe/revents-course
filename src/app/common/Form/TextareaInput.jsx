import React from 'react'
import { FormField, Label, TextArea } from 'semantic-ui-react';

const TextareaInput = ({
    input, rows, type, placeholder, meta: { touched, error }
}) => {
    return (
        <FormField rows={rows} error={touched && !!error}>
            <TextArea {...input} placeholder={placeholder} type={type}/>
            {touched && error && <Label basic color='red'>{error}</Label>}
        </FormField>
    )
}

export default TextareaInput
