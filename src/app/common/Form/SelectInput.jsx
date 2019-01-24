import React from 'react'
import { FormField, Select, Label } from 'semantic-ui-react';

const SelectInput = ({
    input, rows, type, placeholder, multiple, options, meta: { touched, error }
}) => {
    return (
        <FormField rows={rows} error={touched && !!error}>
            <Select 
                value = {input.value || null}
                onChange = {(e,data)=>{input.onChange(data.value)}}
                options={options}
                multiple = {multiple}
                placeholder={placeholder}
                type={type} />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </FormField>
    )
}

export default SelectInput