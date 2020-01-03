
import React, {Component} from 'react'
import '../styles/styles.css'

export default class About extends Component{
    constructor() {
      super()
      this.state = { loading : true, result: null}
    }
    render() {
        return (
            <div className="media-body">
                <div className="content-section article-metadata">
                    <h1>About Page</h1>
                    <p>Contentstack™ is the hub powering omnichannel content, digital experiences, 
                        and personalized customer journeys. It is the industry 
                        leader in the headless content management system (CMS) category. 
                        Marquee customers include Activision Blizzard, Amway, Best Buy, Chase, 
                        Cisco, Dell, Ellie Mae, Express, Farm Bureau Insurance, J.D. Power, Martha Stewart, 
                        Miami HEAT, Riot Games, Shell, Sky, and Walmart. 
                        Contentstack sits at the heart of an award-winning Digital Experience Platform (DXP) 
                        and is the exclusive API-first CMS for the SAP Cloud.</p>
                </div>
            </div>
        )
    }
}