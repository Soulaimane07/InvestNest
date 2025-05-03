import { MapPin } from "lucide-react"
import Sidebar from "../../../Components/Sidebar/Sidebar"
import "./Properties.css"

// Property card component for reusability
const PropertyCard = () => {
  return (
    <div className="property-card">
      <div className="property-image-container">
        {/* Property image */}
        <img src="/src/property-image.jpg" alt="Property" className="property-image" />

        {/* Property type badge */}
        <div className="property-type-badge">Multi-Family house</div>

        {/* Image navigation dots */}
        <div className="image-dots">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`dot ${i === 0 ? "active" : ""}`} />
          ))}
        </div>
      </div>

      <div className="property-content">
        {/* Location */}
        <div className="property-location">
          <MapPin size={16} className="location-icon" />
          <span className="location-text">Morocco</span>
        </div>

        {/* Property name */}
        <h3 className="property-name">House Name</h3>

        {/* Price and investors */}
        <div className="property-details">
          <span className="property-price">$ 400K</span>
          <span className="property-investors">100 Investors</span>
        </div>
      </div>
    </div>
  )
}

export default function Properties() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-content">
            <h1 className="page-title">Properties</h1>

            <div className="user-profile">
              <div className="user-info">
                <div className="user-name">Test 1 Test 2</div>
                <div className="user-email">test@gmail.com</div>
              </div>
              <div className="user-avatar"></div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="page-content">
          {/* Filter bar */}
          <div className="filter-bar">
            <div className="properties-count">Viewing 8 of 12 properties</div>

            <div className="action-buttons">
              <button className="filter-button">Filter</button>
              <button className="connect-button">Connect</button>
            </div>
          </div>

          {/* Properties grid */}
          <div className="properties-grid">
            {/* Render 6 property cards */}
            {[...Array(6)].map((_, index) => (
              <PropertyCard key={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
