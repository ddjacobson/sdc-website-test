"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

interface TypedTextProps {
  strings: string[]
}

const TypedText: React.FC<TypedTextProps> = ({ strings }) => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [strings])

  return <span ref={el} />
}

export default TypedText

