import React from 'react'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import {logo,neurograph} from './assets/assets'
import {Home,CreatePost} from './pages'

const App = () => {
  return (
    <Router>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'> 
          {/* <Link to="/">
            <img src={logo} alt="logo" className='w-28 object-contain'/>
          </Link> */}
          <Link to='/'>
            <img src={neurograph} alt="logo" className='w-[160px] object-contain'/>
          </Link>
          <Link to="/createPost" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create
          </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createPost" element={<CreatePost/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App