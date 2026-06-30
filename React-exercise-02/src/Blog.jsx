const Header = ()=>{
    return (
        <nav className="bg-gray-800  p-2 text-white font-bold uppercase">
            <ul className="flex gap-10 justify-center ">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

const Post = ()=>{
    return(
        <div className="flex justify-center items-center px-20 text-center h-100">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsa doloribus fugit pariatur. Quos eius exercitationem doloribus assumenda eaque nam sunt, laboriosam ducimus pariatur. Debitis optio animi cumque, laboriosam dolores quam architecto itaque non provident expedita unde esse recusandae ut!
            </p>
        </div>
    )
}

const Footer = ()=>{
    return(
        <footer className="bg-gray-700 flex justify-center text-white p-1 absolute bottom-0 items-center w-screen">
            <p>
                &copy; I'm done and you can ....
            </p>
        </footer>
    )
}

const Blog = ()=>{
    return(
        <>
            <Header/>
            <Post />
            <Footer />
        </>
    )
}

export default Blog