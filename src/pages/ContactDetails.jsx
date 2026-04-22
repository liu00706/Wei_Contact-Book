import { useEffect, useState } from 'react'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../db'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ContactDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [contact, setContact] = useState(null)

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'contacts', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setContact({ id: docSnap.id, ...docSnap.data() })
      }
    }

    fetchContact()
  }, [id])

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this contact?')
    if (!confirmDelete) return

    await deleteDoc(doc(db, 'contacts', id))
    navigate('/')
  }

  if (!contact) return <p>Loading...</p>

  return (
    <div className="details-card">
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p><strong>Email:</strong> {contact.email}</p>
      {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
      {contact.company && <p><strong>Company:</strong> {contact.company}</p>}

      <div className="button-row">
        <Link to={`/edit/${contact.id}`} className="btn">Edit</Link>
        <button onClick={handleDelete} className="btn danger">Delete</button>
      </div>
    </div>
  )
}

export default ContactDetails