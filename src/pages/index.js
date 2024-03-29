import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const Home = () => {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

export default Home
