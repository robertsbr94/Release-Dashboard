import React from 'react'

class NavBar extends React.Component {

    SelectRelease(e)
    {   
        let tempReleases = [...this.props.releases];
                
        let selectedButton = tempReleases.filter(release => release.releaseRef === Number(e.target.id));
        let unselectedButtons = tempReleases.filter(release => release.releaseRef !== Number(e.target.id));
        
        selectedButton[0].active = true
        for (let i = 0; i < unselectedButtons.length; i++)
        {
            unselectedButtons[i].active = false
        }
        
        this.props.updateSelection({
            releases: tempReleases
        })
    }

    render()
    {       
        const styles = {
            'active': {
                backgroundColor: '#ccc',
                fontWeight: 'bold'
            },
            'inactive': {
                backgroundColor: '#eee',
                fontWeight: 'normal'
            }
        }
  
        if (this.props.loading)
        {
            return <div/>;
        }
        else
        {
           
            const buttons = this.props.releases.map(release => {
                if (release.active === true)
                {
                    return <li style={styles['active']} id={release.releaseRef} onClick={this.SelectRelease.bind(this)}>{release.releaseRef}</li>
                }
                else
                {
                    return <li style={styles['inactive']} id={release.releaseRef} onClick={this.SelectRelease.bind(this)}>{release.releaseRef}</li>
                }
                
            });
            return (
                <nav>
                    <ul id="Navigation">
                        {buttons}
                    </ul>
                </nav>
            );
        }  
    }
}

export default NavBar;