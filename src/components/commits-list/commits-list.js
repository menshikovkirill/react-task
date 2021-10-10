import React from 'react';
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
    const ItemList = <div className="commits-list">{commits.map((elem, index) => <Commit key={index} props={elem} />)}</div>
    return ItemList;
}

export default CommitsList;