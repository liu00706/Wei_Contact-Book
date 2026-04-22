import { Link } from 'react-router-dom'

function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>
  }

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-card">
          <Link to={`/contact/${contact.id}`}>
            {contact.lastName}, {contact.firstName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ContactList