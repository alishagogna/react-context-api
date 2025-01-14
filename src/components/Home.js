import { useTheme } from '../context/ThemeContext'

const Home = () => {
    const {toggleTheme} = useTheme();
    return (
        <div style={{height:'100%'}}>
            <h1 style={{margin:0}}>Theme Change Module</h1>
            <button onClick={toggleTheme}>Reverse Theme</button>
        </div>
    )
}

export default Home;