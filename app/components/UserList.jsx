export default function UserList({ users, selectedUserId , onSelectUser }) {
    return (
      <div className="w-1/3 border-r">
        <h2 className="text-lg font-bold p-4">User</h2>
        {users.length > 0 ? (
          users.map((user,index) => (
            <div
              key={`${index}`}
              className={`p-4 flex items-center cursor-pointer ${
                selectedUserId === user.id ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => onSelectUser(user.id)}
            >
              <img
                src={user.avatar}
                alt={user.profile.firstName}
                className="w-12 h-12 rounded-full mr-4"
                onError={(e) => (e.target.src = "/defaultAvatar.png")}
              />
              <div>
                <p className="font-medium">{user.profile.firstName}</p>
                <p className="text-sm text-gray-500">{user.jobTitle}</p>
                <p className="text-sm text-gray-500">{user.Bio}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="p-4 text-gray-500">No users available</p>
        )}
      </div>
    );
  }
  
