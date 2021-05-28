import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props => {

    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h6 style={{ fontSize: "17px" }}>{comment.author}</h6>
                    <p style={{ fontSize: "15px" }}>{comment.comment}</p>
                    <p style={{ fontSize: "12px" }}>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            );
        })
    );
}

export default LoadComments;