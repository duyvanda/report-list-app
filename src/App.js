import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import ReportScreen from './components/ReportScreen'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Route exact path='/'component={FeedbackList} />
          <Route path='/about' component={AboutPage} />
          <Route path="/item/:id" component={ReportScreen} />
        </>
      </Router>
    </FeedbackProvider>
  )
}

export default App
