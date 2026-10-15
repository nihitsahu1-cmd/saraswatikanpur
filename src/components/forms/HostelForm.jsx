import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'
import { whatsappService } from '../../services/whatsappService'
import { Button } from '../common/Button'

const hostelSchema = z.object({
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  class: z.string().min(1, 'Please select a class'),
  hostelRequirement: z.string().min(1, 'Please specify hostel requirement'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const HostelForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(hostelSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitSuccess(true)
    setIsSubmitting(false)
  }

  const handleWhatsAppSubmit = (data) => {
    whatsappService.sendHostelEnquiry(data)
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
          Enquiry Submitted
        </h3>
        <p className="text-mutedText mb-6">
          Thank you for your hostel enquiry. We will contact you soon.
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
            Submit Another Enquiry
          </Button>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-deepNavy mb-2">
            Student Name *
          </label>
          <input
            type="text"
            {...register('studentName')}
            className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors"
            placeholder="Enter student name"
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-deepNavy mb-2">
            Parent/Guardian Name *
          </label>
          <input
            type="text"
            {...register('parentName')}
            className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors"
            placeholder="Enter parent/guardian name"
          />
          {errors.parentName && (
            <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-deepNavy mb-2">
            Mobile Number *
          </label>
          <input
            type="tel"
            {...register('mobileNumber')}
            className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors"
            placeholder="Enter 10-digit mobile number"
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-deepNavy mb-2">
            Class *
          </label>
          <select
            {...register('class')}
            className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors bg-white"
          >
            <option value="">Select class</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
          </select>
          {errors.class && (
            <p className="text-red-500 text-sm mt-1">{errors.class.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-deepNavy mb-2">
          Hostel Requirement *
        </label>
        <select
          {...register('hostelRequirement')}
          className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors bg-white"
        >
          <option value="">Select requirement</option>
          <option value="Full-time">Full-time (7 days)</option>
          <option value="Weekly">Weekly (5 days)</option>
          <option value="Day Scholar">Day Scholar with transport</option>
        </select>
        {errors.hostelRequirement && (
          <p className="text-red-500 text-sm mt-1">{errors.hostelRequirement.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-deepNavy mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-antiqueGold/30 focus:border-warmOrange focus:ring-2 focus:ring-warmOrange/20 outline-none transition-colors resize-none"
          placeholder="Your specific requirements or questions..."
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
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
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

export default HostelForm