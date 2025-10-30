"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  Dumbbell,
  Utensils,
  Waves,
  Sparkles,
  Sliders,
  Heart,
  ChevronRight,
} from "lucide-react"

export default function HOTEL() {
  const [currentSection, setCurrentSection] = useState("home")
  const [selectedHotelId, setSelectedHotelId] = useState(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [filteredHotels, setFilteredHotels] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedStars, setSelectedStars] = useState([])
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [favorites, setFavorites] = useState([])
  const [showBookingSuccess, setShowBookingSuccess] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" })
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author_name: "John Smith",
      rating: 5,
      comment: "Amazing hotel with excellent service!",
      created_at: "2025-01-15",
    },
    {
      id: 2,
      author_name: "Sarah Johnson",
      rating: 4,
      comment: "Great location and comfortable rooms.",
      created_at: "2025-01-10",
    },
  ])

  // Booking flow states
  const [bookingPage, setBookingPage] = useState("login")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("full")
  const [showAddCardModal, setShowAddCardModal] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [country, setCountry] = useState("United States")
  const [saveInfo, setSaveInfo] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [bookingData, setBookingData] = useState(null)

  const hotelLogos = {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYTcxS1Ebq0YkAttDzELq402UmuwerKWR4Q&s",
    2: "https://i.pinimg.com/280x280_RS/8b/3a/f2/8b3af2e5d128501d810c63fbaad330b4.jpg",
    3: "https://static.vecteezy.com/system/resources/previews/046/166/214/non_2x/paradise-beach-resort-palm-tree-tropical-island-summer-travel-vacation-logo-design-template-vector.jpg",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNUrRrTBZQvGHjpB0tJbEOLKGojcaJTPCgg&s",
  }

  // Mock hotel data
  const hotels = [
    {
      id: 1,
      name: "CVK Park Bosphorus Hotel Istanbul",
      location: "Istanbul, Turkey",
      address: "Gümüşsuyu Mah. İnönü Cad. No:8, Istanbul 34437",
      price_per_night: 240,
      rating: 4.2,
      stars: 5,
      image_url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery_images: [
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Located in Taksim Cankaya, in the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has main from the aisles of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming its hospitality mission. With its 62 luxurious rooms and suites, also rich and diverse areas, it is a unique hotel in Istanbul.",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Gym", "Beach Access"],
      latitude: 41.0082,
      longitude: 29.0761,
      baseFare: 240,
      taxes: 20,
      serviceFee: 5,
      total: 265,
      roomType: "Superior room - 1 double bed or 2 twin beds",
      reviewCount: 54,
      reviewText: "Very Good",
    },
    {
      id: 2,
      name: "Eresin Hotels Sultanahmet - Boutique Class",
      location: "Istanbul, Turkey",
      address: "Küçükayasofya Mah. Şehit Mehmet Paşa Yokuşu No:38, Istanbul 34122",
      price_per_night: 104,
      rating: 4.5,
      stars: 4,
      image_url: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery_images: [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Charming boutique hotel in the heart of Sultanahmet. Experience authentic Turkish hospitality with modern comfort and traditional architecture.",
      amenities: ["Free WiFi", "Restaurant", "Gym", "Bar", "Spa"],
      latitude: 41.0054,
      longitude: 28.9769,
      baseFare: 104,
      taxes: 15,
      serviceFee: 5,
      total: 124,
      roomType: "Deluxe room - 1 queen bed",
      reviewCount: 89,
      reviewText: "Excellent",
    },
    {
      id: 3,
      name: "Tropical Paradise Resort",
      location: "Bali, Indonesia",
      address: "Jl. Pantai Kuta, Kuta, Badung Regency, Bali 80361",
      price_per_night: 150,
      rating: 4.8,
      stars: 5,
      image_url: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery_images: [
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Stunning beachfront resort with lush gardens, infinity pools, and world-class dining. Your tropical paradise awaits.",
      amenities: ["Free WiFi", "Pool", "Beach Access", "Restaurant", "Spa", "Gym"],
      latitude: -8.6705,
      longitude: 115.2126,
      baseFare: 150,
      taxes: 18,
      serviceFee: 5,
      total: 173,
      roomType: "Ocean view villa - 1 king bed",
      reviewCount: 127,
      reviewText: "Outstanding",
    },
    {
      id: 4,
      name: "London Heritage Hotel",
      location: "London, UK",
      address: "123 Westminster Bridge Rd, London SE1 7HR",
      price_per_night: 200,
      rating: 4.6,
      stars: 4,
      image_url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery_images: [
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Historic hotel in the heart of London with elegant rooms, fine dining, and easy access to major attractions.",
      amenities: ["Free WiFi", "Restaurant", "Gym", "Bar", "Concierge"],
      latitude: 51.5074,
      longitude: -0.1278,
      baseFare: 200,
      taxes: 25,
      serviceFee: 5,
      total: 230,
      roomType: "Executive suite - 1 king bed",
      reviewCount: 76,
      reviewText: "Very Good",
    },
  ]

  const recentSearches = [
    {
      id: 1,
      location: "Istanbul, Turkey",
      image_url: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      location: "Sydney, Australia",
      image_url: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      location: "Maldives",
      image_url: "https://images.pexels.com/photos/1488317/pexels-photo-1488317.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]

  const amenityIcons = {
    "Free WiFi": Wifi,
    Restaurant: Utensils,
    Gym: Dumbbell,
    Pool: Waves,
    Spa: Sparkles,
    Bar: Coffee,
  }

  const commonAmenities = ["Free WiFi", "Pool", "Spa", "Restaurant", "Gym", "Beach Access"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const toggleStar = (star) => {
    setSelectedStars((prev) => (prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]))
  }

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  const toggleFavorite = (hotelId) => {
    setFavorites((prev) => (prev.includes(hotelId) ? prev.filter((id) => id !== hotelId) : [...prev, hotelId]))
  }

  const applyFilters = () => {
    let filtered = hotels.filter(
      (hotel) => hotel.price_per_night >= priceRange[0] && hotel.price_per_night <= priceRange[1],
    )

    if (selectedStars.length > 0) {
      filtered = filtered.filter((hotel) => selectedStars.includes(hotel.stars))
    }

    if (selectedAmenities.length > 0) {
      filtered = filtered.filter((hotel) => selectedAmenities.every((amenity) => hotel.amenities.includes(amenity)))
    }

    setFilteredHotels(filtered)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    applyFilters()
    setCurrentSection("search")
  }

  const handleBookNow = (hotelId) => {
    setSelectedHotelId(hotelId)
    setBookingPage("login")
    setCurrentSection("booking")
  }

  const handleBackToHotels = () => {
    setCurrentSection("home")
    setSelectedHotelId(null)
    setBookingPage("login")
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    if (newReview.name && newReview.comment) {
      setReviews([
        ...reviews,
        {
          id: reviews.length + 1,
          author_name: newReview.name,
          rating: newReview.rating,
          comment: newReview.comment,
          created_at: new Date().toISOString().split("T")[0],
        },
      ])
      setNewReview({ name: "", rating: 5, comment: "" })
    }
  }

  const handleContinueLogin = () => {
    setBookingPage("payment")
  }

  const handleBackFromPayment = () => {
    setBookingPage("login")
  }

  const handleAddCard = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 5000))
    setShowAddCardModal(false)

    const data = {
      guestName: cardholderName,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
      cardholderName: cardholderName,
      country: country,
    }
    setBookingData(data)
    setBookingPage("confirmation")
    setIsLoading(false)
    setCardNumber("")
    setExpiryDate("")
    setCvv("")
    setCardholderName("")
    setCountry("United States")
    setSaveInfo(false)
  }

  const handleBackFromConfirmation = () => {
    setCurrentSection("home")
    setBookingData(null)
    setBookingPage("login")
  }

  const selectedHotel = hotels.find((h) => h.id === selectedHotelId)
  const allImages = selectedHotel ? [selectedHotel.image_url, ...selectedHotel.gallery_images] : []

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-teal-500 rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Processing your booking...</p>
        </div>
      </div>
    )
  }

  if (currentSection === "booking" && bookingPage === "confirmation" && bookingData && selectedHotel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-orange-500 hover:underline cursor-pointer">
                {selectedHotel.location.split(",")[1]?.trim()}
              </span>
              <span className="text-gray-400">›</span>
              <span className="text-orange-500 hover:underline cursor-pointer">
                {selectedHotel.location.split(",")[0]}
              </span>
              <span className="text-gray-400">›</span>
              <span className="text-gray-700">{selectedHotel.name}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{selectedHotel.name}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{selectedHotel.address}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-orange-500">${selectedHotel.total}</div>
                <button className="mt-3 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-12">
                  <div className="col-span-3 bg-emerald-100 p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-2xl font-semibold text-gray-800">
                        <span className="block">Thur</span>
                        <span className="block font-bold text-2xl">Dec 8</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Check-In</div>
                    </div>

                    <div className="flex items-center justify-center text-emerald-300 opacity-70">
                      <div className="flex flex-col items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 21h18M8 3v18M16 3v18M5 7h14"
                          />
                        </svg>
                        <div className="h-9 border-l-2 border-dashed border-emerald-200 my-2" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl font-semibold text-gray-800">
                        <span className="block">Fri</span>
                        <span className="block font-bold text-2xl">Dec 9</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Check-Out</div>
                    </div>
                  </div>

                  <div className="col-span-9 bg-white">
                    <div className="bg-emerald-200 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                          {bookingData.cardholderName?.substring(0, 2).toUpperCase() || "JD"}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-emerald-900">{bookingData.cardholderName}</div>
                          <div className="text-xs text-emerald-800 opacity-80">{selectedHotel.roomType}</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 shadow-sm">
                          <div className="p-2 rounded-md bg-emerald-50 inline-flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-emerald-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="8"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path d="M12 8v4l3 1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Check-in time</div>
                            <div className="font-semibold text-gray-800">12:00pm</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 shadow-sm">
                          <div className="p-2 rounded-md bg-emerald-50 inline-flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-emerald-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="8"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path d="M12 9v5l3 1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Check-out time</div>
                            <div className="font-semibold text-gray-800">11:30pm</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 shadow-sm">
                          <div className="p-2 rounded-md bg-emerald-50 inline-flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-emerald-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="16"
                                rx="2"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="16" cy="12" r="0.6" fill="currentColor" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Room no.</div>
                            <div className="font-semibold text-gray-800">On arrival</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div>
                          <div className="text-4xl font-extrabold text-gray-900">EK</div>
                          <div className="text-xs text-gray-400">ABC12345</div>
                        </div>

                        <div className="flex-1" />

                        <div className="w-64 flex items-end" aria-hidden>
                          <svg viewBox="0 0 240 90" className="w-full h-24" preserveAspectRatio="xMaxYMax meet">
                            <rect width="100%" height="100%" fill="transparent" />
                            {(() => {
                              const bars = []
                              const patterns = [
                                2, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 2, 2, 1, 4, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2, 4, 1,
                                2, 1, 3, 2, 1, 2, 1, 3,
                              ]
                              let x = 6
                              for (let i = 0; i < patterns.length; i++) {
                                const w = patterns[i]
                                const h = 42 + ((i * 7) % 5) * 6
                                const y = 88 - h
                                bars.push(<rect key={i} x={x} y={y} width={w} height={h} fill="#111827" />)
                                x += w + 3
                              }
                              return bars
                            })()}
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-dashed border-gray-200" />

                    <div className="p-6 flex items-center justify-between">
                      <div className="text-sm text-gray-500">Reservation details — present this at check-in</div>
                      <div className="text-sm text-gray-400">Printed copy</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions</h3>

                  <div className="space-y-6 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-3">Payments</h4>
                      <ul className="space-y-3">
                        <li className="text-base leading-relaxed">
                          If you are purchasing your ticket using a debit or credit card via the Website, we will
                          process these payments via the automated secure common payment gateway which will be subject
                          to fraud screening purposes.
                        </li>
                        <li className="text-base leading-relaxed">
                          If you do not supply the correct card billing address and/or cardholder information, your
                          booking will not be confirmed and the overall cost may increase. We reserve the right to
                          cancel your booking if payment is declined for any reason or if you have supplied incorrect
                          card information.
                        </li>
                        <li className="text-base leading-relaxed">
                          Golobe may require the card holder to provide additional payment verification upon request by
                          either submitting an online form or visiting the nearest Golobe office, or at the airport at
                          the time of check-in.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-3">Contact Us</h4>
                      <div className="text-base leading-relaxed space-y-2">
                        <p>If you have any questions about our Website or our Terms of Use, please contact:</p>
                        <p className="font-semibold">Golobe Group Q.C.S.C</p>
                        <p>Golobe Tower</p>
                        <p>P.O. Box: 22550</p>
                        <p>Doha, State of Qatar</p>
                        <p>
                          Further contact details can be found at{" "}
                          <a href="https://golobe.com/help" className="text-teal-600 font-semibold">
                            golobe.com/help
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 sticky top-8 flex flex-col items-center justify-center">
                <div className="w-full h-64 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center p-6 mb-6">
                  <img
                    src={hotelLogos[selectedHotel.id] || "/placeholder.svg"}
                    alt={`${selectedHotel.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <button
                  onClick={handleBackFromConfirmation}
                  className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentSection === "booking" && bookingPage === "payment" && selectedHotel) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm mb-3">
              <button
                onClick={handleBackFromPayment}
                className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <button onClick={handleBackToHotels} className="text-orange-500 hover:underline cursor-pointer">
                {selectedHotel.location.split(",")[1]?.trim()}
              </button>
              <span className="text-gray-400">›</span>
              <button onClick={handleBackToHotels} className="text-orange-500 hover:underline cursor-pointer">
                {selectedHotel.location.split(",")[0]}
              </button>
              <span className="text-gray-400">›</span>
              <span className="text-gray-700">{selectedHotel.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">{selectedHotel.roomType}</h1>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-500">${selectedHotel.price_per_night}</div>
                    <div className="text-sm text-gray-500">/night</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={hotelLogos[selectedHotel.id] || "/placeholder.svg"}
                      alt={`${selectedHotel.name} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedHotel.name}</h2>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{selectedHotel.address}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="font-semibold text-gray-900">Thursday, Dec 8</div>
                    <div className="text-sm text-gray-500">Check-In</div>
                  </div>
                  <div className="flex-1 flex justify-center"></div>
                  <div className="text-center flex-1">
                    <div className="font-semibold text-gray-900">Friday, Dec 9</div>
                    <div className="text-sm text-gray-500">Check-Out</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4 border border-gray-200">
                <label
                  className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "full"
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="full"
                    checked={paymentMethod === "full"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Pay in full</div>
                    <div className="text-sm text-gray-600">Pay the total and you are all set</div>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "partial"
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="partial"
                    checked={paymentMethod === "partial"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Pay part now, part later</div>
                    <div className="text-sm text-gray-600">
                      Pay ${Math.floor(selectedHotel.total / 2)} now, and the rest ($
                      {Math.ceil(selectedHotel.total / 2)}) will be automatically charged to the same payment method on
                      Nov 14, 2022. No extra fees.
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setShowMoreInfo(!showMoreInfo)
                      }}
                      className="text-sm text-teal-600 hover:underline mt-2"
                    >
                      {showMoreInfo ? "Less info" : "More info"}
                    </button>
                    {showMoreInfo && (
                      <div className="mt-3 p-3 bg-teal-50 border border-teal-200 rounded text-sm text-gray-700">
                        <p className="font-semibold mb-2">Payment Schedule:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• First payment: ${Math.floor(selectedHotel.total / 2)} (today)</li>
                          <li>• Second payment: ${Math.ceil(selectedHotel.total / 2)} (November 14, 2022)</li>
                          <li>• No additional fees or interest</li>
                          <li>• Same payment method will be used for both charges</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 border border-gray-200">
                <div className="bg-teal-500 rounded-lg p-6 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <input type="radio" name="selectedCard" defaultChecked className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gray-800 px-3 py-1 rounded text-xs font-bold">VISA</div>
                  </div>
                  <div className="text-xl tracking-wider mb-6">**** 4321</div>
                  <div className="flex justify-between items-end">
                    <div className="text-sm opacity-90">02/27</div>
                  </div>
                </div>

                <div
                  onClick={() => setShowAddCardModal(true)}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-teal-500 transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center mb-3 group-hover:bg-teal-50 transition-colors">
                      <svg
                        className="w-6 h-6 text-teal-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <div className="text-gray-600 font-medium">Add a new card</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 sticky top-8">
                <div className="flex gap-4 mb-6">
                  <img
                    src={selectedHotel.image_url || "/placeholder.svg"}
                    alt="Hotel"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{selectedHotel.name.substring(0, 20)}...</div>
                    <div className="font-semibold text-sm text-gray-900 mb-2">{selectedHotel.roomType}</div>
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {selectedHotel.rating}
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-semibold">{selectedHotel.reviewText}</span> {selectedHotel.reviewCount}{" "}
                        reviews
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-600 mb-6">
                  Your booking is protected by <span className="font-semibold">golobe</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Price Details</h4>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Fare</span>
                      <span className="font-semibold text-gray-900">${selectedHotel.baseFare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="font-semibold text-gray-900">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes</span>
                      <span className="font-semibold text-gray-900">${selectedHotel.taxes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span className="font-semibold text-gray-900">${selectedHotel.serviceFee}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">${selectedHotel.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showAddCardModal && (
              <>
                <div
                  className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
                  onClick={() => setShowAddCardModal(false)}
                />

                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200 shadow-lg">
                    <button
                      onClick={() => setShowAddCardModal(false)}
                      className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Add a new Card</h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="4321 4321 4321 4321"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                            VISA
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">Exp. Date</label>
                          <input
                            type="text"
                            placeholder="02/27"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">CVC</label>
                          <input
                            type="text"
                            placeholder="123"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Name on Card</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={cardholderName}
                          onChange={(e) => setCardholderName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Country or Region</label>
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none appearance-none bg-white"
                        >
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Turkey</option>
                          <option>Germany</option>
                          <option>France</option>
                        </select>
                      </div>

                      <div className="flex items-start gap-3 pt-2">
                        <input
                          type="checkbox"
                          id="saveInfo"
                          checked={saveInfo}
                          onChange={(e) => setSaveInfo(e.target.checked)}
                          className="mt-1 w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <label htmlFor="saveInfo" className="text-sm text-gray-700 cursor-pointer">
                          Securely save my information for 1-click checkout
                        </label>
                      </div>

                      <button
                        onClick={handleAddCard}
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors mt-6"
                      >
                        Add Card
                      </button>

                      <p className="text-xs text-gray-500 text-center mt-4">
                        By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for
                        this payment and future payments in accordance with their terms. You can always cancel your
                        subscription.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (currentSection === "booking" && bookingPage === "login" && selectedHotel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm mb-3">
              <button
                onClick={handleBackToHotels}
                className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Hotels
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <button onClick={handleBackToHotels} className="text-orange-500 hover:underline cursor-pointer">
                {selectedHotel.location.split(",")[1]?.trim()}
              </button>
              <span className="text-gray-400">›</span>
              <button onClick={handleBackToHotels} className="text-orange-500 hover:underline cursor-pointer">
                {selectedHotel.location.split(",")[0]}
              </button>
              <span className="text-gray-400">›</span>
              <span className="text-gray-700">{selectedHotel.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">{selectedHotel.roomType}</h1>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-500">${selectedHotel.price_per_night}</div>
                    <div className="text-sm text-gray-500">/night</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={hotelLogos[selectedHotel.id] || "/placeholder.svg"}
                      alt={`${selectedHotel.name} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedHotel.name}</h2>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{selectedHotel.address}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="font-semibold text-gray-900">Thursday, Dec 8</div>
                    <div className="text-sm text-gray-500">Check-In</div>
                  </div>
                  <div className="flex-1 flex justify-center"></div>
                  <div className="text-center flex-1">
                    <div className="font-semibold text-gray-900">Friday, Dec 9</div>
                    <div className="text-sm text-gray-500">Check-Out</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Login or Sign up to book</h3>

                <div className="space-y-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      We'll call or text you to confirm your number. Standard message and data rates apply. Privacy
                      Policy
                    </p>
                  </div>

                  <button
                    onClick={handleContinueLogin}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Continue
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h2.85c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-3.15c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                    </button>
                  </div>

                  <button
                    onClick={handleContinueLogin}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>Continue with email</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 sticky top-8">
                <div className="flex gap-4 mb-6">
                  <img
                    src={selectedHotel.image_url || "/placeholder.svg"}
                    alt="Hotel"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{selectedHotel.name.substring(0, 20)}...</div>
                    <div className="font-semibold text-sm text-gray-900 mb-2">{selectedHotel.roomType}</div>
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {selectedHotel.rating}
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-semibold">{selectedHotel.reviewText}</span> {selectedHotel.reviewCount}{" "}
                        reviews
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-600 mb-6">
                  Your booking is protected by <span className="font-semibold">golobe</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Price Details</h4>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Fare</span>
                      <span className="font-semibold text-gray-900">${selectedHotel.baseFare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="font-semibold text-gray-900">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes</span>
                      <span className="font-semibold text-gray-900">${selectedHotel.taxes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span className="font-semibold text-gray-900">${selectedHotel.serviceFee}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">${selectedHotel.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentSection === "home" && (
        <>
          <section className="relative h-[600px] bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600)",
              }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <button
                  onClick={() => {
                    applyFilters()
                    setCurrentSection("search")
                  }}
                  className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Show Places
                </button>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your recent searches</h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {recentSearches.map((search) => (
                  <motion.button
                    key={search.id}
                    variants={itemVariants}
                    onClick={() => {
                      applyFilters()
                      setCurrentSection("search")
                    }}
                    className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={search.image_url || "/placeholder.svg"}
                      alt={search.location}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-bold text-white">{search.location}</h3>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Fall into travel</h2>
                <button
                  onClick={() => {
                    applyFilters()
                    setCurrentSection("search")
                  }}
                  className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                >
                  See All
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {hotels.map((hotel) => (
                  <motion.div
                    key={hotel.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    onClick={() => {
                      setSelectedHotelId(hotel.id)
                      setCurrentSection("details")
                    }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={hotel.image_url || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                        <img
                          src={hotelLogos[hotel.id] || "/placeholder.svg"}
                          alt={`${hotel.name} logo`}
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{hotel.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{hotel.location}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-teal-600">${hotel.price_per_night}</span>
                          <span className="text-gray-500 text-sm"> / night</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedHotelId(hotel.id)
                            setCurrentSection("details")
                          }}
                          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                        >
                          View Deal
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Backpacking Sri Lanka</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily
                    life. It helps us to forget about our problems, frustrations, and fears at home. During our journey,
                    we experience life in different ways. We explore new places, cultures, cuisines, traditions, and
                    ways of living.
                  </p>
                  <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Learn More
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sri Lanka 1"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sri Lanka 2"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  />
                  <img
                    src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sri Lanka 3"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
                  />
                  <img
                    src="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sri Lanka 4"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {currentSection === "search" && (
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <aside className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <div className="flex items-center gap-2 mb-6">
                    <Sliders className="h-5 w-5 text-teal-600" />
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, Number.parseInt(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Star Rating</h3>
                    <div className="space-y-2">
                      {[5, 4, 3].map((star) => (
                        <label key={star} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedStars.includes(star)}
                            onChange={() => toggleStar(star)}
                            className="rounded text-teal-600 focus:ring-teal-500"
                          />
                          <div className="flex items-center gap-1">
                            {Array.from({ length: star }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
                    <div className="space-y-2">
                      {commonAmenities.map((amenity) => (
                        <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedAmenities.includes(amenity)}
                            onChange={() => toggleAmenity(amenity)}
                            className="rounded text-teal-600 focus:ring-teal-500"
                          />
                          <span className="text-sm text-gray-700">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setPriceRange([0, 1000])
                      setSelectedStars([])
                      setSelectedAmenities([])
                      applyFilters()
                    }}
                    className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              </aside>

              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
                  <p className="text-gray-600 mt-2">{filteredHotels.length} properties found</p>
                </div>

                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                  {filteredHotels.map((hotel) => (
                    <motion.div
                      key={hotel.id}
                      variants={itemVariants}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                          className="relative h-64 md:h-full overflow-hidden cursor-pointer"
                          onClick={() => {
                            setSelectedHotelId(hotel.id)
                            setCurrentSection("details")
                          }}
                        >
                          <img
                            src={hotel.image_url || "/placeholder.svg"}
                            alt={hotel.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                            <img
                              src={hotelLogos[hotel.id] || "/placeholder.svg"}
                              alt={`${hotel.name} logo`}
                              className="h-12 w-auto object-contain"
                            />
                          </div>
                          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm">{hotel.rating}</span>
                          </div>
                        </div>

                        <div className="md:col-span-2 p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-4 w-4" />
                                <span>{hotel.location}</span>
                              </div>
                              <div className="flex items-center gap-1 mt-2">
                                {Array.from({ length: hotel.stars }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleFavorite(hotel.id)
                              }}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <Heart
                                className={`h-6 w-6 ${
                                  favorites.includes(hotel.id)
                                    ? "fill-red-500 text-red-500"
                                    : "text-gray-400 hover:text-red-500"
                                }`}
                              />
                            </button>
                          </div>

                          <div className="text-right mb-4">
                            <div className="text-3xl font-bold text-teal-600">${hotel.price_per_night}</div>
                            <div className="text-gray-500 text-sm">per night</div>
                          </div>

                          <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {hotel.amenities.slice(0, 5).map((amenity) => (
                              <span
                                key={amenity}
                                className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() => {
                              setSelectedHotelId(hotel.id)
                              setCurrentSection("details")
                            }}
                            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                          >
                            View Place
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {filteredHotels.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">No hotels found matching your criteria.</p>
                      <button
                        onClick={() => {
                          setPriceRange([0, 1000])
                          setSelectedStars([])
                          setSelectedAmenities([])
                          applyFilters()
                        }}
                        className="mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentSection === "details" && selectedHotel && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              <div className="lg:col-span-2">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={allImages[selectedImage] || "/placeholder.svg"}
                    alt={selectedHotel.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {allImages.slice(0, 4).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`h-24 rounded-lg overflow-hidden ${
                        selectedImage === idx ? "ring-4 ring-teal-600" : ""
                      }`}
                    >
                      <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold">{selectedHotel.rating}</span>
                    <span className="text-gray-500">({reviews.length} reviews)</span>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-teal-600 mb-1">${selectedHotel.price_per_night}</div>
                    <div className="text-gray-500">per night</div>
                  </div>

                  <button
                    onClick={() => handleBookNow(selectedHotel.id)}
                    className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl mb-4"
                  >
                    Book Now
                  </button>

                  <AnimatePresence>
                    {showBookingSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 bg-green-100 text-green-800 rounded-lg text-center font-medium"
                      >
                        Booking successful!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900 mb-3">What's included</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        Free cancellation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        No prepayment needed
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        Best price guarantee
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => toggleFavorite(selectedHotel.id)}
                    className={`w-full mt-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                      favorites.includes(selectedHotel.id)
                        ? "bg-red-100 text-red-700 hover:bg-red-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${favorites.includes(selectedHotel.id) ? "fill-red-500 text-red-500" : ""}`}
                    />
                    {favorites.includes(selectedHotel.id) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedHotel.name}</h2>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg">{selectedHotel.location}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: selectedHotel.stars }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-gray-600">{selectedHotel.stars}-Star Hotel</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedHotel.description}</p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedHotel.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] || Sparkles
                      return (
                        <div key={amenity} className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg">
                          <Icon className="h-5 w-5 text-teal-600" />
                          <span className="text-gray-700 font-medium">{amenity}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Map</h3>
                  <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                    <iframe
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedHotel.longitude - 0.01},${selectedHotel.latitude - 0.01},${selectedHotel.longitude + 0.01},${selectedHotel.latitude + 0.01}&layer=mapnik&marker=${selectedHotel.latitude},${selectedHotel.longitude}`}
                      width="100%"
                      height="100%"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Guest Reviews</h3>

                  <div className="space-y-6 mb-8">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.author_name}</h4>
                            <div className="flex items-center gap-1 mt-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.created_at}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Add Your Review</h4>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          value={newReview.name}
                          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              onClick={() => setNewReview({ ...newReview, rating })}
                              className="p-2"
                            >
                              <Star
                                className={`h-6 w-6 ${
                                  rating <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                        <textarea
                          value={newReview.comment}
                          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                      >
                        Submit Review
                      </button>
                    </form>
                  </div>
                </motion.section>
              </div>

              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why book with us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Best Price Guarantee</h4>
                        <p className="text-sm text-gray-600">Find it cheaper? We'll match the price</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                        <p className="text-sm text-gray-600">We're here whenever you need us</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Secure Booking</h4>
                        <p className="text-sm text-gray-600">Your data is safe with us</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Flexible Cancellation</h4>
                        <p className="text-sm text-gray-600">Plans change, we understand</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
