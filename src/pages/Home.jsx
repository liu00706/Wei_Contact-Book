import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../db'
import ContactList from '../components/ContactList'

function Home() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'))
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      items.sort((a, b) => a.lastName.localeCompare(b.lastName))
      setContacts(items)
    }

    fetchContacts()
  }, [])

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase()
    return fullName.includes(search.toLowerCase())
  })

  return (
    <div>
      <h1>Contacts</h1>

      <input
        type="text"
        placeholder="Search by first or last name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <ContactList contacts={filteredContacts} />
    </div>
  )
}

export default Home