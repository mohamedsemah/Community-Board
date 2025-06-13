import EventInfo from './EventInfo'
import './EventCard.css'

function EventCard({ event }) {
  const getEventEmoji = (type) => {
    const emojiMap = {
      'Academic': '📚',
      'Sports': '🏈',
      'Social': '🎉',
      'Career': '💼',
      'Arts': '🎭',
      'Wellness': '🧘',
      'Greek Life': '🏛️',
      'Volunteer': '🤝',
      'Research': '🔬',
      'Technology': '💻'
    }
    return emojiMap[type] || '📅'
  }

  return (
    <div className="event-card">
      <div className="card-image">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="event-image"
          />
        ) : (
          <div className="placeholder-image">
            <span className="placeholder-text">No Image</span>
          </div>
        )}
      </div>

      <EventInfo event={event} />

      <div className="card-button-container">
        <button className="view-details-btn">
          <span>View Details</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  )
}

export default EventCard