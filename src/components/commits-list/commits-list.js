import React, { useEffect, useState } from 'react';
import './commits-list.scss';

import format from 'date-fns/format';
import { ru } from 'date-fns/locale';

const Commit = ({props}) => 
    <div className="commit">
        <div className="content">
            <div className="title">
                <div className={"number" + " " + props.status}>{props.number}</div>
                <div className="description">{props.description}</div>
            </div>
            <div className="details">
                <div className="branch">{props.branch}</div>
                <div className="hash">{props.hash}</div>
                <div className="author">{props.author}</div>
            </div>
        </div>
        <div className="time-description">
            <span className="dataTime">{format(new Date(props.dateTime), 'dd LLL, hh:mm', {locale: ru})}</span>
            <span className="uploadTime">1 ч 20 мин</span>
        </div>
    </div>

const CommitsList = ({commits}) => {
    const [isDisplayAll, setDisplayingAll] = useState(false);
    const [commistList, setCommitsList] = useState(commits);

    useEffect(() => {
        if (!isDisplayAll) {
            setCommitsList(commits.slice(0, 7));
        } else {
            setCommitsList(commits);
        }
        console.log("here")
    }, [isDisplayAll])

    return <div className="commits-list">
        {commistList.map((elem, index) => <Commit key={index} props={elem} />)}
        <div className="button-show"><button className="button-grey" onClick={() => setDisplayingAll(!isDisplayAll)}>{!isDisplayAll ? "Show more" : "Hide part"}</button></div>
    </div>;
}

export default CommitsList;