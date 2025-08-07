import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

const BurgerGesprächBtn = () => {
  const navigate = useNavigate()
  const leftRef = useRef(null)
  const bottomRef = useRef(null)
  const rightRef = useRef(null)
  const topRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
    tl
      .to(leftRef.current, { scaleY: 1, transformOrigin: "top", duration: 0.25 }, 0)
      .to(bottomRef.current, { scaleX: 1, transformOrigin: "right", duration: 0.25 }, 0)
      .to(rightRef.current, { scaleY: 1, transformOrigin: "top", duration: 0.25 }, 0.25)
      .to(topRef.current, { scaleX: 1, transformOrigin: "right", duration: 0.25 }, 0.25)
      .to([leftRef.current, rightRef.current], { scaleY: 0, duration: 0.25 }, 1.5)
      .to([bottomRef.current, topRef.current], { scaleX: 0, duration: 0.25 }, 1.5)
    return () => tl.kill()
  }, [])

  return (
    <button
      onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
      className="relative px-6 py-3 my-2 text-[1.3em] font-[500] tracking-[2px] shadow-2xl text-white cursor-pointer bg-gradient-to-r from-[#003566] via-75%-[#001D3D] to-[#001D3D] inline-block overflow-hidden"
    >
      Kostenloses Erstgespräch

      <span ref={leftRef} className="block absolute left-0 bottom-0 w-px h-full bg-white" style={{ transform: "scaleY(0)", transition: "none" }} />
      <span ref={bottomRef} className="block absolute left-0 bottom-0 w-full h-px bg-white" style={{ transform: "scaleX(0)", transition: "none" }} />
      <span ref={rightRef} className="block absolute right-0 bottom-0 w-px h-full bg-white" style={{ transform: "scaleY(0)", transition: "none" }} />
      <span ref={topRef} className="block absolute left-0 top-0 w-full h-px bg-white" style={{ transform: "scaleX(0)", transition: "none" }} />
    </button>
  )
}

export default BurgerGesprächBtn
