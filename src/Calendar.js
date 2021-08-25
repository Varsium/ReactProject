import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'


export default class Calendar extends React.Component {
  calendarRef = React.createRef()

  weekendsVisible= true

  render() {
    return (
      <FullCalendar
      ref={this.calendarRef}
        plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        weekends={this.weekendsVisible}
        editable={true}
        selectable={true}
        height="90vh"
        locale='nl-be'
        dateClick={this.handleDateClick}
        eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
      />
    )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
  
}

