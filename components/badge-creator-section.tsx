"use client"

import { useState, useRef, useCallback } from "react"
import { Upload, Download, Share2, Trash2, Trophy, Sparkles, QrCode, X, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { WoodenBoardTitle } from "./wooden-board-title"
import Image from "next/image"
import Cropper from "react-easy-crop"
import type { Area } from "react-easy-crop"
import "react-easy-crop/react-easy-crop.css"

export function BadgeCreatorSection() {
  const [userName, setUserName] = useState("")
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null)
  const [croppedPhoto, setCroppedPhoto] = useState<string | null>(null)
  const [showCropModal, setShowCropModal] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const downloadBadgeRef = useRef<HTMLDivElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedPhoto(reader.result as string)
        setShowCropModal(true)
        // Reset crop settings
        setCrop({ x: 0, y: 0 })
        setZoom(1)
        setRotation(0)
      }
      reader.readAsDataURL(file)
    }
  }

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new window.Image()
      image.addEventListener("load", () => resolve(image))
      image.addEventListener("error", (error) => reject(error))
      image.src = url
    })

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area,
    rotation = 0
  ): Promise<string> => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    if (!ctx) {
      throw new Error("No 2d context")
    }

    const maxSize = Math.max(image.width, image.height)
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

    canvas.width = safeArea
    canvas.height = safeArea

    ctx.translate(safeArea / 2, safeArea / 2)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.translate(-safeArea / 2, -safeArea / 2)

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    )

    const data = ctx.getImageData(0, 0, safeArea, safeArea)

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
    )

    return canvas.toDataURL("image/jpeg")
  }

  const handleCropSave = async () => {
    if (uploadedPhoto && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(uploadedPhoto, croppedAreaPixels, 0)
        setCroppedPhoto(croppedImage)
        setShowCropModal(false)
      } catch (e) {
        console.error("Error cropping image:", e)
      }
    }
  }

  const handleCropCancel = () => {
    setShowCropModal(false)
    setUploadedPhoto(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleDownload = async () => {
    if (downloadBadgeRef.current) {
      try {
        // Wait a moment for any animations to settle
        await new Promise(resolve => setTimeout(resolve, 200))
        
        // Use html2canvas for screenshot
        const html2canvas = (await import("html2canvas")).default
        const canvas = await html2canvas(downloadBadgeRef.current, {
          backgroundColor: null,
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          imageTimeout: 0,
          width: 480,
          height: 640,
          windowWidth: 480,
          windowHeight: 640,
        })
        
        // Convert to data URL directly
        const dataUrl = canvas.toDataURL("image/png", 1.0)
        const link = document.createElement("a")
        const safeName = userName.trim() ? userName.replace(/\s+/g, '-').toLowerCase() : "participant"
        link.download = `ai-clash-2025-${safeName}.png`
        link.href = dataUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (error) {
        console.error("Error downloading badge:", error)
        // Fallback alert with more details
        alert(`Failed to download badge: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`)
      }
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Nerds AI Clash 2025 - My Badge",
          text: `Check out my badge for Nerds AI Clash 2025! ${userName ? `I'm ${userName}` : ""} Join me at India's Largest AI Hackathon!`,
          url: window.location.href,
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    } else {
      // Fallback: Copy to clipboard
      const url = window.location.href
      navigator.clipboard.writeText(url)
      alert("Link copied to clipboard!")
    }
  }

  const handleClearData = () => {
    setUserName("")
    setUploadedPhoto(null)
    setCroppedPhoto(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <section id="badge-creator" className="py-12 md:py-24 px-3 md:px-4 bg-gradient-to-b from-white to-[#f8f4ed] relative overflow-hidden" suppressHydrationWarning>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10 hidden md:block">
        <Trophy className="w-32 h-32 text-[#f1c33a]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
        <Sparkles className="w-32 h-32 text-[#c648d7]" />
</div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Wooden Board Header */}
        <WoodenBoardTitle>
          Create Your <span className="text-[#fff]">Battle Badge</span>
        </WoodenBoardTitle>

        <p className="text-[#073f90]/70 text-sm md:text-lg max-w-2xl mx-auto font-semibold text-center mb-8 md:mb-16 px-2">
          Design your personalized participant badge and share it with your team to earn bonus points!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Badge Preview */}
          <div className="flex justify-center order-1 lg:order-none">
            <div ref={badgeRef} className="relative w-full max-w-[320px] md:max-w-[480px]">
              <BadgeStyle3 userName={userName} photo={croppedPhoto} forDownload={false} />
            </div>
          </div>

          {/* Hidden Download Badge with Clip and Verified Tick */}
          <div className="fixed -left-[9999px] -top-[9999px] pointer-events-none">
            <div ref={downloadBadgeRef} className="relative">
              <BadgeStyle3 userName={userName} photo={croppedPhoto} forDownload={true} />
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-4 md:space-y-8 bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 border-4 md:border-5 border-[#605954] shadow-2xl order-2 lg:order-none">
            {/* Name Input */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-4 md:border-6 border-[#605954]/10 shadow-lg">
              <label className="block text-base md:text-lg font-black text-[#073f90] mb-2 md:mb-3">
                Enter Your Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Type your name here..."
                maxLength={25}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#f8f4ed] border-3 md:border-4 border-[#073f90]/20 rounded-lg md:rounded-xl text-black font-bold text-base md:text-lg focus:outline-none focus:border-[#f1c33a] transition-colors"
              />
            </div>

            {/* Photo Upload */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-3 md:border-4 border-[#073f90]/10 shadow-lg">
              <label className="block text-base md:text-lg font-black text-[#073f90] mb-2 md:mb-3">
                Upload Your Photo
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="flex items-center justify-center gap-2 md:gap-3 w-full px-4 md:px-6 py-3 md:py-4 bg-[#073f90] text-white rounded-lg md:rounded-xl font-bold text-base md:text-lg cursor-pointer hover:bg-[#c648d7] transition-all border-3 md:border-4 border-black shadow-lg hover:scale-105"
              >
                <Upload className="w-4 h-4 md:w-5 md:h-5" />
                {croppedPhoto ? "Change Photo" : "Upload Your Photo"}
              </label>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <button
                onClick={handleDownload}
                disabled={!userName || !croppedPhoto}
                className="flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-3 md:py-4 bg-[#f1c33a] text-black rounded-lg md:rounded-xl font-black text-sm md:text-lg border-3 md:border-4 border-[#8a5831] shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Download
              </button>
              <button
                onClick={handleShare}
                disabled={!userName || !croppedPhoto}
                className="flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-3 md:py-4 bg-[#f1c33a] text-black rounded-lg md:rounded-xl font-black text-sm md:text-lg border-3 md:border-4 border-[#8a5831] shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                Share
              </button>
            </div>

            {/* Clear Button */}
            <button
              onClick={handleClearData}
              className="w-full flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 bg-[#e74c3c] text-white rounded-lg md:rounded-xl font-black text-sm md:text-lg border-3 md:border-4 border-[#c0392b] shadow-lg hover:scale-105 transition-all"
            >
              <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
              Clear Data
            </button>

           
          </div>
        </div>
      </div>

      {/* Image Crop Modal */}
      {showCropModal && uploadedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 md:p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl border-3 md:border-4 border-[#8a5831] shadow-2xl max-w-3xl w-full overflow-hidden max-h-[95vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#f1c33a] to-[#d1a31a] px-4 md:px-6 py-2 md:py-3 border-b-3 md:border-b-4 border-[#8a5831] flex items-center justify-between flex-shrink-0">
              <div>
                <h3 className="text-base md:text-xl font-black text-[#073f90] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                  Adjust Your Photo
                </h3>
                <p className="text-[#073f90]/70 text-[10px] md:text-xs font-bold mt-0.5 md:mt-1">Drag to position your photo</p>
              </div>
              <button
                onClick={handleCropCancel}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#073f90] hover:bg-[#c648d7] text-white rounded-full flex items-center justify-center transition-all flex-shrink-0"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Cropper Area */}
            <div className="relative h-[250px] md:h-[350px] bg-[#2a2a2a] flex-shrink-0">
              <Cropper
                image={uploadedPhoto}
                crop={crop}
                zoom={zoom}
                rotation={0}
                aspect={1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                cropShape="round"
                showGrid={false}
                style={{
                  containerStyle: {
                    backgroundColor: '#2a2a2a',
                  },
                }}
              />
            </div>

            {/* Controls */}
            <div className="bg-[#f8f4ed] px-4 md:px-6 py-4 md:py-6 border-t-3 md:border-t-4 border-[#8a5831]/20 flex-shrink-0">
              <p className="text-center text-[#073f90] font-bold mb-3 md:mb-4 text-xs md:text-base">
                Position your photo inside the circle, then click Save & Apply
              </p>
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto">
                <button
                  onClick={handleCropCancel}
                  className="px-4 md:px-6 py-3 md:py-4 bg-white text-[#073f90] rounded-lg md:rounded-xl font-black text-sm md:text-lg border-3 md:border-4 border-[#073f90]/20 hover:border-[#073f90] transition-all hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCropSave}
                  className="px-4 md:px-6 py-3 md:py-4 bg-[#f1c33a] text-black rounded-lg md:rounded-xl font-black text-sm md:text-lg border-3 md:border-4 border-[#8a5831] shadow-lg hover:scale-105 transition-all"
                >
                  Save & Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Badge Style 3 - Gold/Brown Gaming Theme
function BadgeStyle3({ userName, photo, forDownload = false }: { userName: string; photo: string | null; forDownload?: boolean }) {
  // For download, use fixed dimensions. For preview, use responsive scaling
  if (forDownload) {
    return (
      <div className="w-[480px] h-[640px] relative" style={{ width: '480px', height: '640px' }}>
        {/* Badge Clip - Only for Download */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            {/* Clip Base */}
            <div className="w-20 h-10 bg-gradient-to-b from-[#a8a8a8] to-[#7a7a7a] rounded-b-xl border-4 border-[#5a5a5a] shadow-lg">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-gradient-to-b from-[#c0c0c0] to-[#8a8a8a] rounded-sm"></div>
            </div>
            {/* Clip Connector */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-3 bg-gradient-to-b from-[#7a7a7a] to-[#5a5a5a] rounded-b-lg"></div>
          </div>
        </div>
        <div 
          className="relative bg-[#f8f4ed] rounded-3xl border-4 border-[#8a5831] shadow-2xl w-full"
          style={{ marginTop: '20px', height: '610px' }}
        >
          <div style={{ background: 'linear-gradient(to bottom right, #e8dfc4, #d4c5a0)', borderColor: 'rgba(138, 88, 49, 0.3)' }} className="rounded-2xl border-2 h-full flex flex-col p-4">
            {/* Participant Badge */}
            <div className="bg-[#8a5831] text-center rounded-t-2xl flex-shrink-0 py-2 px-4 -mx-4 -mt-4 mb-4">
              <span className="text-[#f1c33a] font-black tracking-widest text-sm">PARTICIPANT</span>
            </div>

            {/* Header with Icons */}
            <div className="flex items-center justify-between px-2 flex-shrink-0 mb-4">
              <div className="flex items-center gap-2 bg-[#073f90] px-4 py-1.5 rounded-full">
                <span className="text-white font-black text-xs">AI CLASH</span>
              </div>
              <div className="absolute right-3 top-0 w-32 h-32">
                <img src="./images/nerds-logo.png" alt="Nerds Room" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Photo with Frame - Circular */}
            <div className="relative flex-shrink-0 flex justify-center mb-3">
              <div className="relative w-48 h-48">
                {/* Golden Border Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f1c33a] to-[#d1a31a] p-1.5">
                  {/* White Ring */}
                  <div className="w-full h-full bg-white rounded-full p-2">
                    {/* Photo Container */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#3d2415] flex items-center justify-center relative">
                      {photo ? (
                        <img src={photo} alt="User" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center">
                          <div style={{ backgroundColor: 'rgba(241, 195, 58, 0.2)' }} className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <Upload style={{ color: 'rgba(241, 195, 58, 0.5)' }} className="w-8 h-8" />
                          </div>
                          <p style={{ color: 'rgba(241, 195, 58, 0.5)' }} className="text-xs font-bold">Upload Photo</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Verified Checkmark - Only for Download */}
                {photo && (
                  <div className="absolute bottom-1 right-1 w-12 h-12 bg-[#f1c33a] rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <svg className="w-7 h-7 text-[#073f90]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Name Plate */}
            <div 
              style={{ background: 'linear-gradient(to right, #5a3621, #3d2415, #5a3621)' }} 
              className="rounded-3xl border-4 border-[#f1c33a] flex-shrink-0 relative flex items-center justify-center py-4 px-6 mb-3 min-h-[60px]"
            >
              <div style={{ backgroundColor: 'rgba(241, 195, 58, 0.1)' }} className="absolute inset-0 rounded-3xl"></div>
              <p 
                className="relative text-[#f1c33a] font-black uppercase tracking-wider text-center w-full" 
                style={{ 
                  fontSize: userName && userName.length > 15 ? '1.1rem' : '1.4rem', 
                  lineHeight: '1.2', 
                  wordBreak: 'break-word' 
                }}
              >
                {userName || "YOUR NAME"}
              </p>
            </div>

            {/* Event Details Card */}
            <div 
              style={{ background: 'linear-gradient(to bottom right, #5a3621, #3d2415)' }} 
              className="rounded-3xl border-4 border-[#8a5831] flex-shrink-0 p-3"
            >
              <div className="text-center mb-2">
                <h3 className="text-[#f1c33a] font-black text-lg mb-1">AI CLASH 2025</h3>
                <p style={{ color: 'rgba(241, 195, 58, 0.9)' }} className="font-bold text-sm mb-1">India's Largest AI Hackathon</p>
                <p className="text-[#4ade80] font-bold text-sm">BUILD. BATTLE. CONQUER.</p>
              </div>

              {/* Verified Badge */}
              <div 
                style={{ borderColor: 'rgba(138, 88, 49, 0.5)' }} 
                className="flex items-center justify-center gap-2 bg-[#3d2415] rounded-2xl border-2 px-3 py-2"
              >
                <div className="w-6 h-6 bg-[#f8f4ed] rounded flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-4 h-4 text-[#073f90]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full flex-shrink-0"></div>
                  <span className="text-[#f1c33a] font-bold text-sm">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Responsive preview badge
  return (
    <div className="w-full aspect-[3/4] relative">
      <div className="relative bg-[#f8f4ed] rounded-2xl md:rounded-3xl border-3 md:border-4 border-[#8a5831] shadow-2xl w-full h-full">
        <div style={{ background: 'linear-gradient(to bottom right, #e8dfc4, #d4c5a0)', borderColor: 'rgba(138, 88, 49, 0.3)' }} className="rounded-xl md:rounded-2xl border-2 h-full flex flex-col p-3 md:p-4">
          {/* Participant Badge */}
          <div className="bg-[#8a5831] text-center rounded-t-xl md:rounded-t-2xl flex-shrink-0 py-1.5 md:py-2 px-3 md:px-4 -mx-3 md:-mx-4 -mt-3 md:-mt-4 mb-3 md:mb-4">
            <span className="text-[#f1c33a] font-black tracking-widest text-[10px] md:text-sm">PARTICIPANT</span>
          </div>

          {/* Header with Icons */}
          <div className="flex items-center justify-between px-1 md:px-2 flex-shrink-0 mb-3 md:mb-4">
            <div className="flex items-center gap-1.5 md:gap-2 bg-[#073f90] px-2.5 md:px-4 py-1 md:py-1.5 rounded-full">
              <span className="text-white font-black text-[8px] md:text-xs">AI CLASH</span>
            </div>
            <div className="absolute right-2 md:right-3 top-0 w-20 h-20 md:w-40 md:h-40">
              <img src="./images/nerds-logo.png" alt="Nerds Room" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Photo with Frame - Circular */}
          <div className="relative flex-shrink-0 flex justify-center mb-3 md:mb-4">
            <div className="relative w-28 h-28 md:w-56 md:h-56">
              {/* Golden Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f1c33a] to-[#d1a31a] p-1 md:p-1.5">
                {/* White Ring */}
                <div className="w-full h-full bg-white rounded-full p-1.5 md:p-2">
                  {/* Photo Container */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#3d2415] flex items-center justify-center relative">
                    {photo ? (
                      <img src={photo} alt="User" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <div style={{ backgroundColor: 'rgba(241, 195, 58, 0.2)' }} className="w-8 h-8 md:w-16 md:h-16 rounded-full mx-auto mb-1 md:mb-2 flex items-center justify-center">
                          <Upload style={{ color: 'rgba(241, 195, 58, 0.5)' }} className="w-4 h-4 md:w-8 md:h-8" />
                        </div>
                        <p style={{ color: 'rgba(241, 195, 58, 0.5)' }} className="text-[8px] md:text-xs font-bold">Upload Photo</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Name Plate */}
          <div 
            style={{ background: 'linear-gradient(to right, #5a3621, #3d2415, #5a3621)' }} 
            className="rounded-2xl md:rounded-3xl border-2 md:border-4 border-[#f1c33a] flex-shrink-0 relative flex items-center justify-center py-2.5 md:py-5 px-3 md:px-6 mb-2 md:mb-4 min-h-[40px] md:min-h-[70px]"
          >
            <div style={{ backgroundColor: 'rgba(241, 195, 58, 0.1)' }} className="absolute inset-0 rounded-2xl md:rounded-3xl"></div>
            <p 
              className="relative text-[#f1c33a] font-black uppercase tracking-wider text-center w-full text-sm md:text-xl" 
              style={{ 
                lineHeight: '1.2', 
                wordBreak: 'break-word' 
              }}
            >
              {userName || "YOUR NAME"}
            </p>
          </div>

          {/* Event Details Card */}
          <div 
            style={{ background: 'linear-gradient(to bottom right, #5a3621, #3d2415)' }} 
            className="rounded-2xl md:rounded-3xl border-2 md:border-4 border-[#8a5831] flex-shrink-0 p-2 md:p-3"
          >
            <div className="text-center mb-2 md:mb-4">
              <h3 className="text-[#f1c33a] font-black text-xs md:text-lg mb-0.5 md:mb-1">AI CLASH 2025</h3>
              <p style={{ color: 'rgba(241, 195, 58, 0.9)' }} className="font-bold text-[8px] md:text-sm mb-0.5 md:mb-1">India's Largest AI Hackathon</p>
              <p className="text-[#4ade80] font-bold text-[8px] md:text-sm">BUILD. BATTLE. CONQUER.</p>
            </div>

            {/* Verified Badge */}
            <div 
              style={{ borderColor: 'rgba(138, 88, 49, 0.5)' }} 
              className="flex items-center justify-center gap-1.5 md:gap-2 bg-[#3d2415] rounded-xl md:rounded-2xl border md:border-2 px-2 md:px-4 py-1.5 md:py-3"
            >
              <div className="w-4 h-4 md:w-6 md:h-6 bg-[#f8f4ed] rounded flex items-center justify-center flex-shrink-0">
                <QrCode className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#073f90]" />
              </div>
              <div className="flex items-center gap-1 md:gap-1.5">
                <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-[#4ade80] rounded-full flex-shrink-0"></div>
                <span className="text-[#f1c33a] font-bold text-[8px] md:text-sm">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
