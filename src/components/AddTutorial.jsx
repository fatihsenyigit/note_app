import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const listObject = {title, description}
  //   console.log(listObject)
  //   axios.post("https://tutorial-api.fullstack.clarusway.com/tutorials/", listObject);
  //   setTitle('')
  //   setDescription('')
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const listObject = { title, description };
    postTutorial(listObject);
    setTitle("");
    setDescription("");
  };

  const postTutorial = async (listObject) => {
    try {
    await axios.post(process.env.REACT_APP_URL, listObject);
      
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Notes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
