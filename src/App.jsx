import './App.css'
import Header from './components/Header'
import EventCard from './components/EventCard'

function App() {
  const events = [
    {
      id: 1,
      title: "Homecoming Football Game",
      type: "Sports",
      date: "October 15, 2025",
      location: "Michigan Stadium",
      description: "Cheer on the Wolverines as they take on rival Ohio State in the biggest game of the season! Wear your maize and blue.",
      capacity: "107,000 seats",
      image: "/event-images/Football.jpg"
    },
    {
      id: 2,
      title: "Engineering Career Fair",
      type: "Career",
      date: "September 20, 2025",
      location: "Crisler Center",
      description: "Meet with top engineering companies and explore internship and full-time opportunities across all engineering disciplines.",
      capacity: "200+ companies",
      image: "/event-images/Fair.jpg"
    },
    {
      id: 3,
      title: "Greek Life Rush Week",
      type: "Greek Life",
      date: "September 5-12, 2025",
      location: "Various Locations",
      description: "Explore Greek life opportunities with sororities and fraternities. Meet chapter members and learn about each organization.",
      capacity: "Open to all",
      image: "/event-images/Greek.jpg"
    },
    {
      id: 4,
      title: "Research Symposium",
      type: "Research",
      date: "November 8, 2025",
      location: "Rackham Building",
      description: "Undergraduate and graduate students present their research findings across all academic disciplines.",
      capacity: "300 presenters",
      image: "/event-images/research.jpg"
    },
    {
      id: 5,
      title: "Mental Health Awareness Week",
      type: "Wellness",
      date: "October 10, 2025",
      location: "CAPS Office",
      description: "Learn about mental health resources on campus and participate in wellness activities and stress management workshops.",
      capacity: "150 participants",
      image: "/event-images/mental.png"
    },
    {
      id: 6,
      title: "Welcome Week Mixer",
      type: "Social",
      date: "August 28, 2025",
      location: "Michigan Union",
      description: "Meet new friends and connect with fellow students at this fun welcome event featuring games, music, and refreshments.",
      capacity: "500 students",
      image: "/event-images/mixer.jpg"
    },
    {
      id: 7,
      title: "Shakespeare Festival",
      type: "Arts",
      date: "April 15, 2025",
      location: "Power Center",
      description: "Annual celebration of Shakespeare's works featuring student performances, workshops, and special guest speakers.",
      capacity: "800 seats",
      image: "/event-images/shakespeare.jpg"
    },
    {
      id: 8,
      title: "Coding Bootcamp",
      type: "Technology",
      date: "January 15, 2025",
      location: "Computer Science Building",
      description: "Intensive weekend workshop covering web development basics. Perfect for beginners wanting to learn programming.",
      capacity: "50 students",
      image: "/event-images/coding.jpeg"
    },
    {
      id: 9,
      title: "Community Service Day",
      type: "Volunteer",
      date: "March 22, 2025",
      location: "Ann Arbor Community",
      description: "Join fellow students in giving back to the Ann Arbor community through various volunteer opportunities.",
      capacity: "200 volunteers",
      image: "/event-images/Community.jpg"
    },
    {
      id: 10,
      title: "Study Abroad Fair",
      type: "Academic",
      date: "February 12, 2025",
      location: "International Center",
      description: "Explore study abroad opportunities around the world and meet with program representatives and returned students.",
      capacity: "100+ programs",
      image: "/event-images/abroad.png"
    }
  ];

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

         <footer className="footer">
          <p>
            Go Blue! 〽️ For more events, visit{' '}
            <a
              href="https://events.umich.edu/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              events.umich.edu
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App