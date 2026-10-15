import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'
import { whatsappService } from '../../services/whatsappService'
import { Button } from '../common/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitSuccess(true)
    setIsSubmitting(false)
  }

  const handleWhatsAppSubmit = (data) => {
    whatsappService.sendContactMessage(data)
    setSubmitSuccess(true)
  }

  const handleReset = () => {
    reset()
    setSubmitSuccess(false)
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-softPeach rounded-lg p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-deepNavy mb-2">
          Message Sent
        </h3>
        <p className="text-mutedText mb-6">
          Thank you for contacting us. We will get back to you soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="md" asChild>
            <a
              href="https://wa.me/919935244883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} className="mr-2" />
              Continue on WhatsApp
            </a>
          </Button>
          <Button variant="secondary" size="md" onClick={handleReset}>
            Send Another Message
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-deepNavy mb-2">
          Name *
        </label>
        <input
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-deepNavy mb-2">
            Phone *
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors"
            placeholder="Enter 10-digit mobile number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-deepNavy mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors"
            placeholder="Enter email address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-deepNavy mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors resize-none"
          placeholder="Your message or enquiry..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={handleSubmit(handleWhatsAppSubmit)}
          className="flex-1"
        >
          <MessageCircle size={18} className="mr-2" />
          Send via WhatsApp
        </Button>
      </div>
    </form>
  )
}

export default ContactForm