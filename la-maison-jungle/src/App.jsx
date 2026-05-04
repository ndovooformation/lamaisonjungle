import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// J'importe le composant Banner.jsx
import Banner from './components/Banner'

// J'importe le composant Cart.jsx
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'

// J'importe le logo
import logo from './assets/unsplash-logo.jpg'

// J'importe le fichier Banner.css appliqué au composant Banner.jsx
import styles from './styles/Banner.module.css'

function App() {
  const title = "Bienvenue à la maison"

  /**
   * Lorsque je réutilise le composant <Banner>, j'y insère deux enfants <h1> et <img>.
   * Ces enfants sont récupérés dans Banner.jsx à l'aide de props {children}.
   */
  return (
    <>
      
      <Banner> 
        <img src={logo} alt="Logo de la maison" className={styles.logo}/>
        <h1 className={styles.title}>{title}</h1>

      </Banner>
      <Cart />
      <ShoppingList />

    </>
  )
}

export default App
