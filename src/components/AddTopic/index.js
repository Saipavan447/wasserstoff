import Popup from 'reactjs-popup'
import axios from 'axios'
import 'reactjs-popup/dist/index.css'

import './index.css'

const AddTopic = () => {
  const submitHandler = event => {
    event.preventDefault()
    const name = event.target.name.value
    const content = event.target.content.value
    const data = {name, content}

    axios
      .post('https://636f3003f2ed5cb047d748f8.mockapi.io/Topicsdata', data)
      .then(response => {
        console.log(response)
        event.target.reset()
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="popup-container">
      <Popup
        contentStyle={{width: '450px'}}
        modal
        trigger={
          <button className="trigger-button" type="button">
            AddTopic
          </button>
        }
      >
        <form
          className="add-topic-container"
          id="contactForm"
          onSubmit={submitHandler}
        >
          <h1 className="add-topic-heading">Add Topic</h1>
          <div className="input-containers">
            <label className="label" htmlFor="topicName">
              Topic name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter topic name"
              className="input-name"
              name="name"
              required
            />

            <label className="label" htmlFor="topic-name">
              Topic content
            </label>
            <textarea
              type="text"
              id="content"
              name="content"
              placeholder="Enter content"
              className="input-content"
              required
            />
          </div>
          <button className="add-topic" type="submit">
            Add
          </button>
        </form>
      </Popup>
    </div>
  )
}
export default AddTopic
