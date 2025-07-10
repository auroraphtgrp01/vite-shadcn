'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant='outline'
        size='icon'
        className='relative'
      >
        <Moon className='h-5 w-5' />
        <span className='sr-only'>Chuyển đổi giao diện</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='relative'
    >
      <motion.div
        key='sun-icon'
        initial={{ opacity: 1, rotate: 0, scale: 1 }}
        animate={{
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : 90,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <Sun className='h-5 w-5' />
      </motion.div>

      <motion.div
        key='moon-icon'
        initial={{ opacity: 0, rotate: 90, scale: 0 }}
        animate={{
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 90,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className='absolute'
      >
        <Moon className='h-5 w-5' />
      </motion.div>
      <span className='sr-only'>Chuyển đổi giao diện</span>
    </Button>
  )
}
