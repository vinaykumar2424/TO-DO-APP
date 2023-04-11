import "./All.css";
const Navbar = () => {
    let arrLen = localStorage.getItem("lengthofarray")
    return (
        <div>
            <div className="navbar">
                <a href="addtask" className="navbar-items">AddTask</a>
                <a href="alltasks" className="navbar-items">AllTasks({arrLen})</a>
            </div>
            <div className="formal-text">
                <p>Welcome to your Todo List.</p>
                <p>It's looks empty empty😢, please fill it.</p>
                <a className="nav-add-btn" href="addtask">+ Add Something</a>
            </div>
        </div>
    )
}
export default Navbar;