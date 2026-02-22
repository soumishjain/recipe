import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-800 min-h-screen py-30 px-25 relative overflow-x-hidden '>
          <Navbar />
          <AppRoutes />
    </div>
    )
}

export default App
