import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => (
    <div>
        <div>
            <p>User List</p>
            <button onClick={props.toggleScores}>show user score</button>
        </div>
        <div>
            <ol>
                {
                    props.users.map((user, index) => (
                        <UserListItem user={user} showScores={props.showScores}/>
                    ))
                }
            </ol>
        </div>
    </div>
)

export default UserList