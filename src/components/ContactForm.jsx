import { useState, useEffect } from 'react'

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: ''
}

function ContactForm({ initialData = null, onSubmit }) {
  const [formData, setFormData] = useState(emptyForm)

  useEffect(() => {
    if (initialData) {
      setFormData({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        company: initialData.company || ''
      })
    } else {
      setFormData(emptyForm)
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <label>
        First Name
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Last Name
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <label>
        Company
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="btn">Save Contact</button>
    </form>
  )
}

export default ContactForm