import React from 'react';
import {DetailsTable} from './detailstable'
import ActionsBar from './actionsbar'

function MainBody(props)
{
    let activeRelease;
    try
    {
        activeRelease = props.releases.filter(release => release.active === true);
    }
    catch
    {
        activeRelease = [];
    }
    let bodyContent;
    if (props.loading)
    {
        bodyContent = <h1>Loading Releases...</h1>;
    }
    else if (activeRelease.length === 0)
    {
        bodyContent = <h1>Please select a release:</h1>;
        
    }
    else if (activeRelease.length > 1)
    {
        bodyContent = <h1 className="ErrorMessage">Frontend Error. Only one release can be marked as active at any one time</h1>;
    }
    else
    {
        
        bodyContent = (
            <div>
                <h1>Tasks for Release: {activeRelease[0]['releaseRef']}</h1>
                <DetailsTable activeRelease = {activeRelease[0]}/>
                <h1>Actions</h1>
                <ActionsBar activeRelease = {activeRelease[0]}/>
            </div>
        );
    }
    return (
        <section id="MainBody">
            {bodyContent}
        </section>
    )
}

export default MainBody;