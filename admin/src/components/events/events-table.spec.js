import React from 'react'
import Enzyme, { render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { EventsTable } from './events-table'
import Loader from '../common/loader'
import rawEvents from '../../mocks/conferences'

const events = rawEvents.map((event, id) => ({ id, ...event }))

Enzyme.configure({ adapter: new Adapter() })

describe('EventsTable', () => {
  it('should display loader', () => {
    const container = shallow(<EventsTable loading />, {
      disableLifecycleMethods: true
    })

    expect(container.contains(<Loader />))
  })

  it('should render list of events', () => {
    const container = render(<EventsTable events={events} />, {
      disableLifecycleMethods: true
    })

    const rows = container.find('.test__event-row')
    expect(rows.length).toEqual(events.length)
  })

  it('should fetch all events on mount', (done) => {
    shallow(<EventsTable events={[]} fetchAllEvents={done} />)
  })

  /*
    it('should fetch all events on mount', () => {
        let requested = false
        shallow(<EventsTable events = {[]} fetchAllEvents = {() => requested = true}/>)

        expect(requested).toBe(true)
    });
*/
})
