"use client"

import { useEffect, useRef } from "react"

interface SplineSceneProps {
  sceneUrl: string
  className?: string
}

export function SplineScene({ sceneUrl, className = "" }: SplineSceneProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      console.log("[v0] Spline scene loaded successfully")
    }

    iframe.addEventListener("load", handleLoad)
    return () => iframe.removeEventListener("load", handleLoad)
  }, [])

  return (
    <iframe ref={iframeRef} src={sceneUrl} className={`border-0 ${className}`} title="Spline 3D Scene" loading="lazy" />
  )
}
