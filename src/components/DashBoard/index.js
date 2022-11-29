import Header from '../Header'
import AddTopic from '../AddTopic'
import './index.css'

const DashBoard = () => (
  <div>
    <Header />
    <div className="dashboard-container">
      <AddTopic />
    </div>
  </div>
)
export default DashBoard
