import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react';
import { Route,Switch } from 'react-router'
import AboutPage from './AboutPage';
import AccountPage from './AccountPage';
import  BasicPage  from './BasicPage'
import  PhotosPage  from './PhotosPage'
import  SettingsNav  from './SettingsNav'

export default function SettingsDashboard() {
  return (
    <div>
      <Grid>
        <GridColumn width={12}>
          <Switch>
            <Route exact path='/settings' component={BasicPage}/>
            {/* <Redirect exact from='/settings' to='/settings/basic'/> */}
            <Route path='/settings/basic' component={BasicPage}/>
            <Route path='/settings/about' component={AboutPage}/>
            <Route path='/settings/account' component={AccountPage}/>
            <Route path='/settings/photos' component={PhotosPage}/>
          </Switch>
        </GridColumn>

        <GridColumn width={4}>
          <SettingsNav/>
        </GridColumn>
      </Grid>
    </div>
  )
}
