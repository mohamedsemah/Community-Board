import './EventInfo.css'

function EventInfo({ event }) {
  return (
    <div className="event-info">
      <h3 className="event-title">{event.title}</h3>
      <p className="event-type">{event.type}</p>
      <p className="event-description">{event.description}</p>

      <div className="event-details">
        <div className="detail-item">
          <span className="detail-icon">📅</span>
          <span className="detail-text">{event.date}</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">📍</span>
          <span className="detail-text">{event.location}</span>
        </div>
        {event.capacity && (
          <div className="detail-item">
            <span className="detail-icon">👥</span>
            <span className="detail-text">{event.capacity}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventInfo