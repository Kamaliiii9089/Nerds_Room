"use client"

import { useState, useRef } from "react";
import { Upload, Download, QrCode } from "lucide-react";
import Image from "next/image";

const ParticipantBadge = ({ 
  name, 
  photo 
}: { 
  name: string; 
  photo: string | null;
}) => {
  return (
    <div className="w-full max-w-[400px] md:max-w-[480px] mx-auto">
      {/* Main Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#e8dfc4', border: '6px solid #8a5831' }}>
        {/* Header */}
        <div className="py-4 md:py-5 px-6 relative" style={{ background: 'linear-gradient(to right, #8a5831, #6b4423)' }}>
          <h1 className="text-center font-black text-2xl md:text-3xl tracking-[0.3em]" style={{ color: '#f1c33a' }}>
            PARTICIPANT
          </h1>
          
        </div>

        {/* Card Body */}
        <div className="p-5 md:p-6 space-y-4 md:space-y-5">
          
          {/* Photo Upload with Dashed Border */}
          <div className="flex justify-center">
            <div className="rounded-3xl p-4 md:p-5" style={{ border: '5px dashed #8a5831', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <div className="w-52 h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#3d2415' }}>
                {photo ? (
                  <img
                    src={photo}
                    alt="Participant"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2" style={{ color: 'rgba(241, 195, 58, 0.6)' }} />
                    <span className="text-sm md:text-base font-bold" style={{ color: 'rgba(241, 195, 58, 0.6)' }}>Upload Photo</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name Section with Dashed Border */}
          <div className="rounded-2xl p-4 md:p-5" style={{ border: '5px dashed #8a5831', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
            <h2 className="text-center font-black text-2xl md:text-3xl tracking-wider" style={{ color: '#3d2415' }}>
              {name || "Your Name"}
            </h2>
          </div>

          {/* Event Info Section */}
          <div className="rounded-2xl md:rounded-3xl p-4 md:p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: '4px solid #8a5831' }}>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f1c33a', border: '3px solid #8a5831' }}>
                <QrCode className="w-7 h-7 md:w-9 md:h-9" style={{ color: '#3d2415' }} strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-black text-lg md:text-xl mb-1" style={{ color: '#3d2415' }}>
                  NERDS AI CLASH
                </h3>
               
                <p className="font-black text-sm md:text-base" style={{ color: '#8a5831' }}>
                  5 Lakh+ Worth Prize
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export function BadgeCreatorSection() {
  const [userName, setUserName] = useState("");
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!badgeRef.current) return;
    
    try {
      // Wait for images to load
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const html2canvas = (await import("html2canvas")).default;
      
      // Create a temporary wrapper with padding to capture rounded corners and clip
      const tempWrapper = document.createElement('div');
      tempWrapper.style.padding = '20px';
      tempWrapper.style.paddingTop = '40px'; // Extra space for clip
      tempWrapper.style.background = 'transparent';
      tempWrapper.style.display = 'inline-block';
      tempWrapper.style.position = 'relative';
      
      // Clone the badge
      const badgeClone = badgeRef.current.cloneNode(true) as HTMLElement;
      
      // Create clip element (only for download)
      const clip = document.createElement('div');
      clip.style.position = 'absolute';
      clip.style.top = '20px';
      clip.style.left = '50%';
      clip.style.transform = 'translateX(-50%)';
      clip.style.width = '80px';
      clip.style.height = '40px';
      clip.style.zIndex = '20';
      
      // Clip base
      const clipBase = document.createElement('div');
      clipBase.style.width = '80px';
      clipBase.style.height = '40px';
      clipBase.style.background = 'linear-gradient(to bottom, #a8a8a8, #7a7a7a)';
      clipBase.style.borderRadius = '0 0 12px 12px';
      clipBase.style.border = '4px solid #5a5a5a';
      clipBase.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
      clipBase.style.position = 'relative';
      
      // Clip highlight
      const clipHighlight = document.createElement('div');
      clipHighlight.style.position = 'absolute';
      clipHighlight.style.top = '8px';
      clipHighlight.style.left = '50%';
      clipHighlight.style.transform = 'translateX(-50%)';
      clipHighlight.style.width = '48px';
      clipHighlight.style.height = '16px';
      clipHighlight.style.background = 'linear-gradient(to bottom, #c0c0c0, #8a8a8a)';
      clipHighlight.style.borderRadius = '4px';
      
      clipBase.appendChild(clipHighlight);
      
      // Clip connector
      const clipConnector = document.createElement('div');
      clipConnector.style.position = 'absolute';
      clipConnector.style.bottom = '-12px';
      clipConnector.style.left = '50%';
      clipConnector.style.transform = 'translateX(-50%)';
      clipConnector.style.width = '32px';
      clipConnector.style.height = '12px';
      clipConnector.style.background = 'linear-gradient(to bottom, #7a7a7a, #5a5a5a)';
      clipConnector.style.borderRadius = '0 0 8px 8px';
      
      clipBase.appendChild(clipConnector);
      clip.appendChild(clipBase);
      
      // Add clip and badge to wrapper
      tempWrapper.appendChild(clip);
      tempWrapper.appendChild(badgeClone);
      document.body.appendChild(tempWrapper);
      
      const canvas = await html2canvas(tempWrapper, {
        backgroundColor: null,
        scale: 3,
        useCORS: true,
        allowTaint: false,
        logging: false,
      });
      
      // Remove temporary wrapper
      document.body.removeChild(tempWrapper);
      
      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) {
          alert("Failed to create image. Please try again.");
          return;
        }
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        const safeName = userName.trim() ? userName.replace(/\s+/g, '-').toLowerCase() : "participant";
        link.download = `ai-clash-2026-${safeName}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, "image/png", 1.0);
      
    } catch (error) {
      console.error("Error downloading badge:", error);
      alert(`Failed to download badge: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
    }
  };

  return (
    <section id="badge-creator" className="py-12 md:py-24 px-3 md:px-4 bg-gradient-to-b from-white to-[#f8f4ed] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#073f90] mb-4">
            Create Your <span className="text-[#f1c33a]">Battle Badge</span>
          </h2>
          <p className="text-[#073f90]/70 text-base md:text-lg max-w-2xl mx-auto font-semibold">
            Design your personalized participant badge for Nerds AI Clash 2025!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Badge Preview */}
          <div className="flex justify-center">
            <div ref={badgeRef}>
              <ParticipantBadge name={userName} photo={uploadedPhoto} />
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-12 bg-white rounded-3xl p-6 md:p-8 border-4 border-[#8a5831] shadow-2xl">
           
            {/* Input Controls with Dashed Border */}
            <div className="rounded-3xl p-5 md:p-6 space-y-6" style={{ border: '5px dashed #8a5831', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              {/* Name Input */}
              <div>
                <label className="block text-lg md:text-xl font-black text-[#073f90] mb-3 text-center">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Type your name here..."
                  maxLength={30}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#f8f4ed] border-4 border-[#8a5831]/30 rounded-xl text-[#3d2415] font-bold text-base md:text-lg focus:outline-none focus:border-[#f1c33a] transition-colors text-center"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-lg md:text-xl font-black text-[#073f90] mb-3 text-center">
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
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#073f90] text-white rounded-xl font-bold text-lg cursor-pointer hover:bg-[#f1c33a] hover:text-black transition-all border-4 border-black shadow-lg hover:scale-105"
                >
                  <Upload className="w-5 h-5" />
                  {uploadedPhoto ? "Change Photo" : "Upload Photo"}
                </label>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={!userName || !uploadedPhoto}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#f1c33a] text-black rounded-xl font-black text-lg border-4 border-[#8a5831] shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Download className="w-5 h-5" />
                Download Badge
              </button>
            </div>

            
             {/* Bonus Point Alert */}
            <div className="bg-gradient-to-r from-[#f8f4ed] to-[#e8dfc4] rounded-2xl p-5 md:p-6 border-3 border-[#8a5831]/30">
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 text-center">
                Bonus Point Alert 
              </h3>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-[#073f90] font-bold">
                  Need bonus points? — <span className="font-black">Whole team needs to share their badges</span> on social media & tag @nerdsroom
                </p>
                <p className="text-[#8a5831] font-semibold">
                  Other teams are already grabbing bonus points. Don't let your team miss out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
