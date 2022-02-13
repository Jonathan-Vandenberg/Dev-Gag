import React from 'react'
import { motion } from 'framer-motion'
import './App.css'

export default function Joke({ joke }) {
  return (
    <motion.img
      className='singleJoke'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0.3, scale: 0.8 }
      }}
      src={joke.image}
      alt=''
    />
  )
}
