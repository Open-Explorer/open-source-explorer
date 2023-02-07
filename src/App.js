import './App.scss'
import Particles from 'react-tsparticles'
import { Landing } from './Pages'
import { loadStarsPreset } from 'tsparticles-preset-stars'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
// import Repos from './Pages/Repositories/Repos'

const App = () => {
  const options = {
    preset: 'stars',
    Animation: {
      enable: true,
      speed: 30,
      minimumValue: 0.1,
      sync: false,
    },
  }

  const initialize = (instance) => {
    loadStarsPreset(instance)
  }

  return (
    <div className='App'>
      <div className='components-containter'>
        <ErrorBoundary>
          {/* <Routing /> */}
          <Landing />
          {/* <Repos /> */}
        </ErrorBoundary>
      </div>

      <div className='particles-container'>
        <Particles id='tsparticles' options={options} init={initialize} />
      </div>
    </div>
  )
}

export default App
