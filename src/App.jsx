

import './App.css'
import Slider from './components/Slider'

const Images = [
  {
      image: 'https://tourismteacher.com/wp-content/uploads/2023/10/eu.jpg'
  },
  {
      image: 'https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_640.jpg'
  },
  {
      image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
  }
  
]

function App() {
  

  return (
   <div>
   
    <Slider sliderData={Images}></Slider>
   </div>
  )
}

export default App
