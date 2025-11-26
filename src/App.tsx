import Carousel from "./carousel"

import Navbar from "./Components/Navbar.tsx";


function App() {
  return (
    <>
    <Navbar/>
      <div className="flex justify-center items-center">
        <Carousel/>
      </div>
        
    </>
  )
}

export default App
