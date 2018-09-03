import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import PersonPage from './person-page'
import EventsPage from './events-page'

class AdminPage extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <div>
          <NavLink to="/admin/people" activeStyle={{ color: 'red' }}>
            people
          </NavLink>
        </div>
        <div>
          <NavLink to="/admin/events" activeStyle={{ color: 'red' }}>
            events
          </NavLink>
        </div>
        <Route path="/admin/people" component={PersonPage} />
        <Route path="/admin/events" component={EventsPage} />
      </div>
    )
  }
}

export default AdminPage
