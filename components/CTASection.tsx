// components/CTASection.tsx
'use client';
import { useScroll, useTransform } from 'framer-motion';

export default function CTASection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div style={{ y }} className="flex gap-4">
      <Button variant="crispy">
        Track Airfryer ↗
      </Button>
    </motion.div>
  )
}
