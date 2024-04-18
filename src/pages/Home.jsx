import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from 'axios'

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
    const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    const res = await axios(URL)
    setTutorials(res.data)
    console.log(res.data)
  }

  useEffect(() => {
   getTutorials()
  }, [])
  

  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorials}/>
    </>
  );
};

export default Home;
