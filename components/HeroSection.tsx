// components/HeroSection.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="gradient-background">
      <motion.h1
        animate={{ rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-6xl font-bold text-crispy-gold"
      >
        🍟 Airfryer Token
      </motion.h1>
    </motion.div>
  )
}
