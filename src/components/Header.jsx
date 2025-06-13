import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="awning-stripes"></div>
      <div className="awning-curve"></div>

      <div className="header-content">
        <h1 className="header-title">University of Michigan Events</h1>
        <p className="header-subtitle">
          Discover campus events, workshops, and activities for Wolverines
        </p>
      </div>
    </div>
  )
}

export default Header