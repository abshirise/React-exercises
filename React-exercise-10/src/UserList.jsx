const UserList = () => {
  const userInfo = [
    { id: 1, name: "Omar", email: "omar@gmail.com" },
    { id: 2, name: "Ali", email: "ali@gmail.com" },
    { id: 3, name: "Jama", email: "jama@gmail.com" },
  ];

  return (
    <div>
        <h2>User List</h2>
      <ul>
        {userInfo.length > 0 ? (
          userInfo.map((user, id) => <li key={id}> {user.name}, ({user.email}) </li>)
        ) : (
          <p>User info not found</p>
        )}
      </ul>
    </div>
  );
};
export default UserList;
