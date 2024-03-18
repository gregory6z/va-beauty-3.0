"use client"
import { HTMLMotionProps, motion, useInView } from "framer-motion"
import React, { ReactNode, useRef, useEffect, useState } from "react"

interface FramerDivPropsElement extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
  shouldAnimate?: boolean
}

interface FramerDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  text?: string
}

interface IMotionCascadeProps {
  children: ReactNode[]
  shouldAnimate?: boolean // Adicione uma propriedade para controlar a animação
  delay?: number
  className?: ReactNode
  initialDelay?: number
}

// Hook personalizado para verificar se a tela é móvel
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  return isMobile
}

export function MotionSlideRight({
  children,
  delay,
  ...props
}: FramerDivPropsElement) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isMobile = useIsMobile() // Use o hook personalizado

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
          x: isMobile ? 0 : -80,
          y: isMobile ? -80 : 0,
          filter: "blur(10px)",
        }} // Inicia com um desfoque de 10px
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : isMobile ? 0 : -200, // Move para a posição original quando o elemento está visível
          y: isInView ? 0 : isMobile ? -200 : 0, // Move para a posição original quando o elemento está visível
          filter: isInView ? "blur(0px)" : "blur(10px)", // Remove o desfoque quando o elemento está visível
        }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function MotionSlideLeft({
  children,
  delay,
  ...props
}: FramerDivPropsElement) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 80, filter: "blur(10px)" }} // Inicia com um desfoque de 10px
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 80, // Move para a posição original quando o elemento está visível
          filter: isInView ? "blur(0px)" : "blur(10px)", // Remove o desfoque quando o elemento está visível
        }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function MotionElement({
  children,
  delay,
  ...props
}: FramerDivPropsElement) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // 0, 1, 0.5, 1

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 40,
        }}
        transition={{
          duration: 1,
          delay,
          easing: "easeOut",
        }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function MotionCascade({
  children,
  className,
  initialDelay = 0.5,
}: IMotionCascadeProps) {
  const isMobile = useIsMobile() // Use o hook personalizado

  return (
    <div className={`${className}`}>
      {children.map((child, index) => (
        <MotionElement
          delay={isMobile ? 0 : initialDelay + index * 0.3}
          key={index}
        >
          {child}
        </MotionElement>
      ))}
    </div>
  )
}

export function MotionH1({ children, className }: IMotionCascadeProps) {
  return (
    <div className={`${className}`}>
      {children.map((child, index) => (
        <MotionElement delay={index * 0.2} key={index}>
          {child}
        </MotionElement>
      ))}
    </div>
  )
}

export function TextMotion({ children, ...props }: FramerDivProps) {
  return (
    <motion.div
      initial={{
        translateY: "-10%",
        opacity: 0.2,
        translateZ: 0,
        filter: "blur(20px)",
      }}
      animate={{ translateY: "0%", opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function TextH1Motion({ children, ...props }: FramerDivProps) {
  const words = (children as string).split(" ")
  return (
    <motion.div {...props}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          style={{ display: "inline-block" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function MotionUp({
  children,
  delay = 0,
  ...props
}: FramerDivPropsElement) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 200, filter: "blur(10px)" }} // Inicia com um desfoque de 10px
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -200, // Move para a posição original quando o elemento está visível
            filter: isInView ? "blur(0px)" : "blur(10px)", // Remove o desfoque quando o elemento está visível
          }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.5,
            ease: "easeOut",
          }} // Adiciona um atraso baseado no índice do elemento
          {...props}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
