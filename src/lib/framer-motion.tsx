"use client"
import { HTMLMotionProps, motion } from "framer-motion"
import React, { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

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
}

export function MotionElement({
  children,
  delay,
  ...props
}: FramerDivPropsElement) {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será acionada apenas uma vez quando o elemento estiver visível
  })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 40,
        }}
        transition={{ duration: 0.5, delay, easing: "linear" }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function MotionCascade({ children, className }: IMotionCascadeProps) {
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

export function MotionH1({ children, className }: IMotionCascadeProps) {
  return (
    <div className={`${className}`}>
      {children.map((child, index) => (
        <MotionElement delay={index * 0.1} key={index}>
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
