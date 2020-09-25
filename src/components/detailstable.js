import React from 'react';
import { TableRow } from './tablerow';

export function DetailsTable(props)
{
    let tasks = props.activeRelease.tickets.map(task => {
        return {
            "ref": task.ref,
            "description": task.description,
            "developer": task.developer,
            "specSignedOff": task.specSignedOff?"Yes":"No",
            "status": task.status,
            "percentComplete": task.percentComplete,
            "qaSignOff": task.qaSignOff?"Yes":"No",
            "peerReviewPass": task.peerReviewPass?"Yes":"No",
            "peerReviewer": task.peerReviewer
        };
    })
    const tableBody = tasks.map(task => {return <TableRow taskData={task}/>});

    return (
        <article id="DetailsTable">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Ticket Ref</th>
                        <th>Description</th>
                        <th>Developer</th>
                        <th>Spec Signed Off</th>
                        <th>Status</th>
                        <th>% Complete</th>
                        <th>QA Sign off</th>
                        <th>Peer Review Pass</th>
                        <th>Peer Reviewer</th>
                    </tr>
                </thead>
                <tbody id="TableBody">
                    {tableBody}
                </tbody>
            </table>
        </article>
    );
}