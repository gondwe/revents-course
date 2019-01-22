import React from 'react'
import { Menu, Button } from 'semantic-ui-react';

const SignedOut = ({auth}) => {
    return (
        <Menu.Item position="right">
            <Button onClick={auth(true)} basic inverted content="Login" />
            <Button basic inverted content="Register" style={{ marginLeft: '0.5em' }} />
        </Menu.Item>
    )
}

export default SignedOut
