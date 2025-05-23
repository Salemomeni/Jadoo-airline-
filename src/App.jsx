import React from 'react'
import NavigationBar from './component/header/NavigationBar'
import '../src/App.css'
import Homepage from './pages/home/Homepage'
const App = () => {
  return (
    <div className='back'>
        <NavigationBar/>
        <Homepage/>
    </div>
  
  )
}

export default App