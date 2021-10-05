import React, { Component } from 'react'
import UserList from './UserList'
import UserRegister from './UserRegister'

export default class UserDashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            currentValues: {
                firstName: '',
                lastName: '',
                username: '',
                score: 0
            },
            showScores: true,
            duplicateUsername: false
        }
    }

    handleFirstName = (event) => {
        this.setState((currentState)=>({
            currentValues: {
                ...currentState.currentValues,
                firstName: event.target.value
            }
        }))
    }

    handleLastName = (event) => {
        this.setState((currentState)=>({
            currentValues: {
                ...currentState.currentValues,
                lastName: event.target.value
            }
        }))
    }

    handleUsername = (event) => {
        this.setState((currentState)=>({
            currentValues: {
                ...currentState.currentValues,
                username: event.target.value
            }
        }))
    }
    handleAllFieldsEntered = () => this.state.currentValues.firstName && this.state.currentValues.lastName && this.state.currentValues.username
    handleAddUser = event => {
        event.preventDefault()
        this.setState(prevState =>{
            var foundDuplicate = prevState
                                        .users
                                        .filter((user) =>(user.username === prevState.currentValues.username))

            if(foundDuplicate.length < 1){
                return {
                    users: [...prevState.users, this.state.currentValues],
                    duplicateUsername: false
                }
            }
            else {
                return {
                    duplicateUsername: true
                }
            }
        })
        console.log(this.state)
    }
    handleShowScores = () => {
        this.setState((prevState) => ({
            showScores: !prevState.showScores
        }))
    }
    render(){
        const { users, currentValues } = this.state

        return (
            <div className="user-dashboard">
                <UserRegister 
                    currentValues={currentValues} 
                    setFirstname={this.handleFirstName}
                    setLastname={this.handleLastName}
                    setUsername={this.handleUsername}
                    addUser={this.handleAddUser}
                    disbaledSave={this.handleAllFieldsEntered()}
                    duplicateUsername={this.state.duplicateUsername}
                />
                <UserList users={users} showScores={this.state.showScores} toggleScores={this.handleShowScores}/>
            </div>
        )
    }
}