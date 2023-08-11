import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Configuration = ({ setAPI }) => {

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState(
    {
      amount:10,
      category: '',
      difficulty: '',
      type: ''
    }
  );

  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);

  const handleChange = (event) => {
    const {name, value} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name]:  value
          }
      })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const { amount, category, difficulty, type } = formData

      const amountURL = `amount=${amount}&` 
      const categoryURL = category && `category=${category}&` 
      const difficultyURL = difficulty && `difficulty=${difficulty}&` 
      const typeURL = type && `type=${type}` 

      setAPI( `https://opentdb.com/api.php?${amountURL}${categoryURL}${difficultyURL}${typeURL}`)

      // Navigate to the Play component
      navigate("/quiz/play")

    }

  return (
    <div className="configuration mt-5 pt-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-4">Quiz Configuration</h1>
        <div className="card mx-auto bg-transparent">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Select Category:
                </label>
                <select className="form-select" id="category" name="category" value={formData.category} onChange={handleChange}>
                  <option value=''> Any Category </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="difficulty" className="form-label">
                  Select Difficulty:
                </label>
                <select className="form-select" id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange}>
                  <option value=''>Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="type" className="form-label">
                  Select Type:
                </label>
                <select className="form-select" id="type" name="type" value={formData.type} onChange={handleChange}>
                  <option value=''>Any Type</option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="boolean">True / False</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
