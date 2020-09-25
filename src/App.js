import React from 'react';
import './App.css';
import MainBody from  './components/mainbody';
import NavBar from './components/navbar'



class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { 
          loadingReleases: false,
          releases: [{
            active: false,
            releaseRef: 1.1,
            releaseOwner: "BA Name 1",
            liveDate: "2020-10-11",
            tickets: [{
                    "ref": "TKT-12345",
                    "description": "Task One - New Feature",
                    "developer": "Developer One",
                    "specSignedOff": true,
                    "status": "In Development",
                    "percentComplete": 90,
                    "qaSignOff": true,
                    "peerReviewPass": true,
                    "peerReviewer": ["Reviewer One", "Reviewer Two"]
                },
                {
                    "ref": "TKT-23456",
                    "description": "Task Two - Fixing Defect",
                    "developer": "Developer Two",
                    "specSignedOff": true,
                    "status": "Awaiting Deployment",
                    "percentComplete": 100,
                    "qaSignOff": false,
                    "peerReviewPass": false,
                    "peerReviewer": ["Reviewer Three"]
                }
            ]
        },
        {
          active: false,
          releaseRef: 1.2,
          releaseOwner: "BA Name 2",
          liveDate: "2021-01-23",
          tickets: [{
                  "ref": "TKT-22461",
                  "description": "Task Three - Code Refactor",
                  "developer": "Developer Three",
                  "specSignedOff": true,
                  "status": "In Development",
                  "percentComplete": 90,
                  "qaSignOff": false,
                  "peerReviewPass": false,
                  "peerReviewer": ["Reviewer Four", "Reviewer Five"]
              },
              {
                  "ref": "TKT-33443",
                  "description": "Task Four - Database Restructure",
                  "developer": "Developer Four",
                  "specSignedOff": false,
                  "status": "In Review",
                  "percentComplete": 0,
                  "qaSignOff": false,
                  "peerReviewPass": false,
                  "peerReviewer": ["Reviewer Six"]
              }
          ]
        }
    ]
        };
  }


  SelectRelease(release)
  {
    this.setState(release);
  }
 
  render()
  {
    console.log(this.state)
    return (
      <div>
        <header>
          <NavBar releases={this.state.releases} loading={this.state.loadingReleases} updateSelection={p => this.SelectRelease(p)}/>
        </header>
        <MainBody releases={this.state.releases} loading={this.state.loadingReleases}/>
      </div>
    );
  }
}

export default App;
