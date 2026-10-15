import { schoolData } from "../data/schoolData"

const WHATSAPP_NUMBER = "919935244883" // Format: country code + number (91 for India)

export const whatsappService = {
  generateAdmissionEnquiryMessage: (formData) => {
    return `Hello Saraswati Vidya Niketan Inter College,

I would like to enquire about admission.

Student Name: ${formData.studentName}
Parent/Guardian Name: ${formData.parentName}
Mobile Number: ${formData.mobileNumber}
Email: ${formData.email}
Class Applying For: ${formData.classApplying}
Message: ${formData.message}

Please contact me regarding the admission process.`
  },

  generateHostelEnquiryMessage: (formData) => {
    return `Hello Saraswati Vidya Niketan Inter College,

I would like to enquire about hostel facilities.

Student Name: ${formData.studentName}
Parent/Guardian Name: ${formData.parentName}
Mobile Number: ${formData.mobileNumber}
Class: ${formData.class}
Hostel Requirement: ${formData.hostelRequirement}
Message: ${formData.message}

Please contact me regarding hostel admission.`
  },

  generateContactMessage: (formData) => {
    return `Hello Saraswati Vidya Niketan Inter College,

I have a query.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}

Please contact me.`
  },

  openWhatsApp: (message) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  },

  sendAdmissionEnquiry: (formData) => {
    const message = whatsappService.generateAdmissionEnquiryMessage(formData)
    whatsappService.openWhatsApp(message)
  },

  sendHostelEnquiry: (formData) => {
    const message = whatsappService.generateHostelEnquiryMessage(formData)
    whatsappService.openWhatsApp(message)
  },

  sendContactMessage: (formData) => {
    const message = whatsappService.generateContactMessage(formData)
    whatsappService.openWhatsApp(message)
  }
}