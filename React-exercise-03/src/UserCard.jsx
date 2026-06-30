const UserCard = ({userName, email})=>{
    return(
        <div className="flex m-auto flex-col justify-center items-center w-100 h-50 bg-gray-200 mt-5 rounded-xl shadow">
            <h1> Name : {userName} </h1>
            <p> Email : {email} </p>
        </div>
    )
}

export default UserCard