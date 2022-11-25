import './App.css'
import { SildeBox } from './components/sildeBox'

function App() {

  return (
    <div className="App">
      <div className='up'>↓下滑</div>
      <SildeBox id={'1'} img={'src/assets/images.jpg'} text={'123'}></SildeBox>
      <SildeBox id={'2'} img={'src/assets/images.jpg'} text={'123'}></SildeBox>
      <SildeBox id={'3'} img={'src/assets/images.jpg'} text={'123'}></SildeBox>
      <SildeBox id={'4'} img={'src/assets/images.jpg'} text={'123'}></SildeBox>
      <SildeBox id={'5'} img={'src/assets/images.jpg'} text={'123'}></SildeBox>
      <SildeBox id={'6'} img={'src/assets/images.jpg'} text={'123'}></SildeBox>
    </div>
  )
}

export default App
