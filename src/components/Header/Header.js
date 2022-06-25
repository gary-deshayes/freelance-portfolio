import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <h1>Gary DESHAYES - Freelance Développeur Web Full-Stack</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/experiences">Experience</Link>
      </nav>
      <h2>Arbre de compétences</h2>
    </div>
  )
}

export default Header
