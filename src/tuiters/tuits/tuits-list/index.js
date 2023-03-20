import TuitsListItem from "./tuits-list-item";
import {useSelector} from "react-redux";
const TuitsList = () => {
    const tuitsArray = useSelector((state) => state.tuits);

    return(
        <div className="list-group">
            {
                tuitsArray.map((tuit) =>
                    <TuitsListItem key={tuit._id} tuit={tuit}/>
                )
            }
        </div>
    )
}

export default TuitsList;