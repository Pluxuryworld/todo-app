import './scss/app.scss';
import Header from "./components/Header";
import Todo from "./components/Todo";


function App() {

    return (
        <div className="wrapper">
            <Header />
            <Todo />
        </div>
    );
}

export default App;
