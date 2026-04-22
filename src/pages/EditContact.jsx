import { useEffect, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../db'
import { useParams, useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

function EditContact() {
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

  const handleUpdate = async (formData) => {
    await updateDoc(doc(db, 'contacts', id), formData)
    navigate(`/contact/${id}`)
  }

  if (!contact) return <p>Loading...</p>

  return (
    <div>
      <h1>Edit Contact</h1>
      <ContactForm initialData={contact} onSubmit={handleUpdate} />
    </div>
  )
}

export default EditContact