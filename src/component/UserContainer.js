import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchusers } from '../redux'

function UserContainer({ userData, fetchUsers }) {

  useEffect(() => {
    fetchUsers()
  }, [])

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {
          userData && userData.users &&
          userData.users.map(user => <p>{user.name}</p>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchusers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)