import '../styles/Portfolio.css'
import Dungeonkit from '../images/Dungeonkit.png'
import FetchBaseball from '../images/FetchBaseball.png'


export default function Portfolio() {
    return (
        <div>
            <img src={Dungeonkit}></img>
            <a href='https://github.com/Chase-Garrett/dungeonkit'>Dungeon Kit</a>
            <img src={FetchBaseball}></img>
            <a href='https://github.com/brycehadl/Map-stats'>Fetching Baseball</a>
        </div>
    );
}