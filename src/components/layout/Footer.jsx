import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { schoolData } from '../../data/schoolData'
import { navigationData } from '../../data/navigationData'
import schoolLogo from '../../assets/Images/school_logo_english_Saraswati.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deepNavy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={schoolLogo}
                alt="Saraswati Vidya Niketan Logo"
                className="h-16 w-auto"
              />
            </div>
            <h3 className="font-serif text-xl font-semibold text-antiqueGold">
              {schoolData.name}
            </h3>
            <p className="text-sm text-gray-300">
              {schoolData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-antiqueGold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationData.footer.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-antiqueGold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-antiqueGold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-antiqueGold mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {schoolData.phone.map((phone, index) => (
                    <div key={index}>{phone}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-antiqueGold mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${schoolData.email}`}
                  className="text-sm text-gray-300 hover:text-antiqueGold transition-colors"
                >
                  {schoolData.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-antiqueGold mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  {schoolData.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-antiqueGold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/svnic1656?igsh=bHN2a3FtanE1OXB3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-antiqueGold/20 rounded-full flex items-center justify-center hover:bg-antiqueGold transition-colors group"
              >
                <svg
                  className="w-5 h-5 text-antiqueGold group-hover:text-deepNavy transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-antiqueGold mb-4">
              Location
            </h4>
            <div className="bg-white/10 rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14314.755336792901!2d80.1611105871582!3d26.239298299999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c531420b36147%3A0x179d628b2beef493!2sSaraswati%20Vidya%20Niketan%20Inter%20College%20Patara%20Kanpur!5e0!3m2!1sen!2sus!4v1787306228952!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="School Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-antiqueGold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © {currentYear} {schoolData.name}. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-antiqueGold transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-antiqueGold transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Developed and designed by{' '}
              <a
                href="https://Pinweb.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-antiqueGold hover:text-white transition-colors"
              >
                Pinweb Private Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer