import { addDoc, collection } from 'firebase/firestore'
import { db } from '../db'
import { useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

function NewContact() {
  const navigate = useNavigate()

  const handleCreate = async (formData) => {
    const docRef = await addDoc(collection(db, 'contacts'), formData)
    navigate(`/contact/${docRef.id}`)
  }

  return (
    <div>
      <h1>Add New Contact</h1>
       <ContactForm onSubmit={handleCreate} />
    </div>
  )
}

export default NewContact