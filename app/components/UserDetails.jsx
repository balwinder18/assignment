export default function UserDetails({ user }) {
    return user ? (
      <div className="w-2/3 p-4">
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt={user.profile.firstName}
            className="w-24 h-24 rounded-full mr-4"
            onError={(e) => (e.target.src = "/defaultAvatar.png")}
          />
          <div>
            <h2 className="text-xl font-bold">{user.profile.firstName}</h2>
            <p className="text-gray-600">{user.jobTitle}</p>
          </div>
        </div>
        <div className="mt-4">
          <p>
            <strong>Email:</strong> {user.profile.email}
          </p>
          <p>
            <strong>About:</strong> {user.Bio}
          </p>
        </div>
      </div>
    ) : (
      <div className="w-2/3 p-4">
        <p className="text-gray-500">Select a user to view their details</p>
      </div>
    );
  }
  
