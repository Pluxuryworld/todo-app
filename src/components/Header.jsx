import logoSvg from "../assets/img/todo-list.svg"


function Header() {
    return (
        <div className="container">
            <div className="header">
                <div className="header__logo">
                    <img className="img" src={logoSvg} alt="To do list"/>
                    <h1 className="text">ToDo App</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;