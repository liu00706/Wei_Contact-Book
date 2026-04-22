import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ContactDetails from './pages/ContactDetails'
import NewContact from './pages/NewContact'
import EditContact from './pages/EditContact'

function App() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="brand">Contact Book</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new">Add Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path="/new" element={<NewContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  )
}

export default App