import { useState, useEffect } from 'react'

const useDetectScreenSize = () => {
    const [screenSize, setScreenSize] = useState({})
  
    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
  
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return screenSize
  }

  export default useDetectScreenSize;