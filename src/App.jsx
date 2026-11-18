import Hero from './components/Hero.jsx'
import Photograph from './components/Photograph.jsx'
import Message from './components/Message.jsx'
import Finale from './components/Finale.jsx'
import Progress from './components/Progress.jsx'

export default function App() {
  return (
    <>
      <Progress />
      <div className="grain" aria-hidden="true" />
      <main>
        <Hero />
        <Photograph />
        <Message />
        <Finale />
      </main>
    </>
  )
}
