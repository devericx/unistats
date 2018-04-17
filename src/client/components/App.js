import React, { Component } from 'react';
import normalize from 'normalize.css';

import Nav from './Nav';
import Block from './Block';
import Profile from './Profile';
import Stat from './Stat';
import StatTable from './StatTable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <Block header="Delivering the holistic profiles of real past college applicants.">
            <p className="f2 grey">
              College admissions are getting increasingly competitive by the year. Understand what
              it takes to be admitted.
            </p>
            <p className="f2 grey">Receive your first 2 profiles, free.</p>
          </Block>
          <Profile
            header="Asian male from GA"
            major="Computer Science, Applied Mathematics"
            class="2022"
            ugpa="3.8"
            wgpa="4.5/6.0"
            nsat="1580"
            osat="n/a"
            act="36"
            ap="Calculus BC (5), Psychology (5), Chemistry (4), Biology (4), Physics 1 (5), US History (5), Environmental Science (4), Statistics (5), European History (5), Calculus AB (5), English Language and Composition (5)"
            sat2="Math II 800, Chemistry 800, US History 790, Biology E 730"
            courseload="IB Math HL, IB Chem HL, IB English HL, IB Physics SL, IB French SL, IB History SL"
            ec={[
              'eSports Club (9-12, secretary)',
              'FBLA (10-12, vice president)',
              'Math Club (10-12)',
              'Mathcounts Mentoring (10)',
              'State Math Team (9-12)',
              'Piano (9-10)',
              'Tennis (9-12)',
              'NHS (12)',
              'Summer research internship at cancer center (2017), worked on optimizing cancer treatment with radiation therapy through mathematical modeling – this is what got me semifinalist in Siemens Competition',
              'VA Hospital (10)',
              'Science Museum (11-12)',
              'Summer Experience: Summer camps on math, FBLA national competition, volunteering, creative writing',
            ]}
            awards={[
              'Siemens Competition Semifinalist',
              '2xNational Chemistry Olympiad Qualifier',
              '3xAIME Qualifier',
              'NM Finalist',
              'National AP Scholar',
              'US Presidential Scholar Candidate',
              'Utah Math Olympiad 3rd Place (10)',
              'Utah State Math Contest 3rd Place (9)',
              'Science Olympiad Medals (Local & State level) (9-12)',
            ]}
            essays="n/a"
            recs="n/a"
            interviews="n/a"
            hooks="n/a"
            other="If you’re going into STEM go for very high achievements in STEM competitions while also making sure you have top leadership positions (ie president) in order to have a chance at HYPSM schools. Of course, don’t be so focused on prestige like I was because there are plenty of other schools out there that will be a good fit for you!"
            special="n/a"
          />
        </div>
      </div>
    );
  }
}

export default App;
