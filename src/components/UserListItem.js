import React from 'react'

const UserListItem = (props) => (
    <li key={props.user.username}>{props.user.firstName} {props.user.lastName} {props.user.username} {props.showScores && props.user.score}</li>
)

export default UserListItem