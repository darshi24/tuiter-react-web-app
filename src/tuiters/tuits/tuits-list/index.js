import TuitsListItem from "./tuits-list-item";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {findTuitsThunk} from "../../../services/tuits-thunks";
const TuitsList = () => {

    // const {tuitsArray,loading} = useSelector(state => state.tuitsData)
    const x = useSelector(state => state.tuitsData)
    const tuitsArray = x.tuits;
    const loading = x.loading;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    console.log(x);
    return(
        <div className="list-group">

            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuitsArray.map((tuit) =>
                    <TuitsListItem key={tuit._id} tuit={tuit}/>
                )

            }
        </div>
    )
}

export default TuitsList;