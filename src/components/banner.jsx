import math_icon from '../assets/math_icon.png'

export default function Banner() {
  return (
    <header>
      <img src={math_icon} style={{ width: '140px', filter: 'brightness(0) invert(1)' }}/>
      <h1>Quickmath</h1>
      <p>Arithmetic Speed Drills</p>
    </header>
  )
}