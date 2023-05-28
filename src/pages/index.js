import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>I'm learning to design and code modern apps</h1>
        <p>Prototype and build apps with React.</p>
        <p>Complete courses about the best tools and design systems.</p>
      <Link to="/page-2/">Learn More</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
