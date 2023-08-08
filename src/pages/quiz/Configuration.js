const Configuration = () => {

  

  return (
    <div className="Configuration d-flex flex-column">
      <h1 className="text-center mb-4">Quiz Configuration</h1>
      <div className="card mx-auto bg-transparent" style={{width: '25rem'}}>
        <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="number-of-questions" className="form-label">Number of Questions :</label>
            <input type="number" min={1} max={50} className="form-control" id="number-of-questions" />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Select Category :</label>
            <select className="form-select" id="category">
              <option>Any Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="difficulty" className="form-label">Select Difficulty :</label>
            <select className="form-select" id="difficulty">
              <option>Any Difficulty</option>
              <option value="1">Easy</option>
              <option value="2">Meduim</option>
              <option value="3">Hard</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">Select Type :</label>
            <select className="form-select" id="type">
              <option>Any Type</option>
              <option value="2">Multiple Choice</option>
              <option value="3">True / False</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
  )

}

export default Configuration;