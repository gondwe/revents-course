import React from 'react'
import { FormField, Input, Label } from 'semantic-ui-react';

const TextInput = ({
    input, width, type, placeholder, meta: { touched, error }
}) => {
    return (
        <FormField with={width} error={touched && !!error}>
            <Input {...input} placeholder={placeholder} type={type}/>
            {touched && error && <Label basic color='red'>{error}</Label>}
        </FormField>
    )
}

export default TextInput
