import { LazyMotion, domAnimation, m } from "framer-motion"

export const LazyMotionProvider = () => (
  <LazyMotion features={domAnimation}>
    <m.div animate={{ opacity: 1 }} />
  </LazyMotion>
)
