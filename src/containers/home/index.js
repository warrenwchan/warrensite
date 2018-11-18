import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron'
import SkillSetCards from '../../components/SkillSetCards'
import ContactSection from '../../components/ContactSection'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const home = this.props.data.allPrismicHomePage.edges[0].node.data;

    return (
      <section>
        <Jumbotron data={home}/>
        <SkillSetCards/>
        <ContactSection/>
      </section>
    )
  }
}

export default Home;
