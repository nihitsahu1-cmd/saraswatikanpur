import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '7275321836'
  const message = 'Hey, I want help for fees, admission, and other information.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-action-button whatsapp-action-button"
      aria-label="Contact us on WhatsApp"
    >
      <span className="whatsapp-action-icon" aria-hidden="true">
        <MessageCircle size={36} strokeWidth={2} />
        <Phone size={17} strokeWidth={2.5} />
      </span>
    </a>
  )
}

export default WhatsAppButton