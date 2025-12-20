"use client"

import Image from "next/image"

export function WoodenBoardTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto mb-16">
      {/* Wooden board image background */}
      <div className="relative w-full aspect-[4/1] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/images/wooden-board.png"
          alt="Wooden Board"
          fill
          className="object-cover"
          priority
        />
        
        {/* Content with golden text on top of wooden board */}
        <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center">
            <span className="wooden-board-text">
              {children}
            </span>
          </h2>
        </div>
      </div>

      {/* Wooden board text styling */}
      <style jsx global>{`
        .wooden-board-text {
          color: #f1c33a;
          text-shadow: 
            2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            0 4px 8px rgba(0, 0, 0, 0.8);
          font-weight: 900;
        }
        
        .wooden-board-text span {
          color: #fff;
        }
      `}</style>
    </div>
  )
}
