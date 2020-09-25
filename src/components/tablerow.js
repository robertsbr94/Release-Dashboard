import React from 'react';

export function TableRow(props)
{
	const taskData = props.taskData;
    return (
        <tr>
            <td>{taskData["ref"]}</td>
            <td>{taskData["description"]}</td>
            <td>{taskData["developer"]}</td>
            <td>{taskData["specSignedOff"]}</td>
            <td>{taskData["status"]}</td>
            <td>{taskData["percentComplete"]}</td>
            <td>{taskData["qaSignOff"]}</td>
            <td>{taskData["peerReviewPass"]}</td>
            <td>
                <ul>
                    {taskData["peerReviewer"].map(reviewer => {return <li>{reviewer}</li>})}
                </ul>
            </td>
        </tr>
    )
}