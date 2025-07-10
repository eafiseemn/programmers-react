import "../styles/UserListCount.css"

interface Props {
  searchedUsersCount: number,
  totalUsersCount:number
}

function UserListCount({searchedUsersCount, totalUsersCount}:Props) {
  return (
    <span 
      className="UserListCount" 
      data-testid="user-list-count"
    >
      {searchedUsersCount} / <b>{totalUsersCount}</b>
    </span>
  )
}

export default UserListCount