import './index.css'

const Topics = () => (
  <div className="main_container">
    <div className="addtopic_container">
      <div className="left">
        <h2>Level of Understanding</h2>
        <button type="submit" className="greenish_btn">
          Understood
        </button>
        <button type="submit" className="yellow_btn">
          Somewhat Understood
        </button>
        <button type="submit" className="blue_btn">
          Not Clear
        </button>
        <button type="submit" className="red_btn">
          What Rubbish
        </button>
      </div>

      <div className="right">
        <div className="form_container">
          <h2> Create A Topic</h2>
          <input
            type="text"
            placeholder="Enter Title of the Topic"
            name="topic"
            required
            className="input"
          />
          <textarea type="text" name="description" className="input1" />

          <button type="submit" className="green_btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Topics
