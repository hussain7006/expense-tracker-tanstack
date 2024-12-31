import { useEffect, useState } from 'react'
import Routes from './config/Routes/Routes'
import { ThemeProvider } from './contexts/theme'
import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
