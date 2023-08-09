import { useState } from "react";
import { useEffect } from "react";


const Configuration = () => {
  
  const [ categories, setCategories ] = useState([])
  
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
    .then(response => response.json())
    .then(data => setCategories(data.trivia_categories))
  }, [])

  return (
    <div className="configuration mt-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-4">Quiz Configuration</h1>
        <div className="card mx-auto bg-transparent">
          <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="number-of-questions" className="form-label">Number of Questions :</label>
              <input type="number" min={1} max={50} name="amount" className="form-control" id="number-of-questions" />
            </div> 
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Select Category :</label>
              {
                <select className="form-select" id="category" name="category">
                  <option defaultValue={null}> Any Category </option>
                  {categories.map((category) => <option key={category.id} value={category.id}>{ category.name }</option> )}
                </select>
              }
              {/* <select className="form-select" id="category">
                <option>Any Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> 
              </select> */} 
            </div>
            <div className="mb-3">
              <label htmlFor="difficulty" className="form-label">Select Difficulty :</label>
              <select className="form-select" id="difficulty">
                <option defaultValue={null}>Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="meduim">Meduim</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">Select Type :</label>
              <select className="form-select" id="type" name="type">
                <option defaultValue={null}>Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Configuration;