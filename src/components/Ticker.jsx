import './Ticker.css'

const items = ['React','Next.js','Vite','TypeScript','MySQL','Lua','Figma','PHP','Git']

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__sep">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
