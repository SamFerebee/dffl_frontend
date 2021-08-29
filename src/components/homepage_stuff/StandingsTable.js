import React, { useState, useEffect } from "react"

const StandingsTable = () => {
    const [names, setNames] = useState([]);
    const [avatars, setAvatars] = useState([]);
    const [wins, setWins] = useState([]);
    const [losses, setLosses] = useState([]);
    const [points_for, setPoints_for] = useState([]);
    const [points_against, setPoints_against] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:3000/get_season_data")
            .then(r=>r.json())
            .then(data=>{
                let tempNames = [data["1"].name, data["2"].name];
                setNames(tempNames);
                let tempAvatars = [data["1"].avatar, data["2"].avatar];
                setAvatars(tempAvatars);
                let tempWins = [data["1"].wins, data["2"].wins];
                setWins(tempWins);
                let tempLosses = [data["1"].losses, data["2"].losses];
                setLosses(tempLosses);
                let tempPointsFor = [data["1"].points_for, data["2"].points_for];
                setPoints_for(tempPointsFor);
                let tempPointsAgainst = [data["1"].points_against, data["2"].points_against];
                setPoints_against(tempPointsAgainst);
            })
    }, [])


    return(
        <table id ="homeStandingsTable">
            <tbody>
                <tr>
                    <th>Rank</th>
                    <th></th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Points For</th>
                    <th>Points Against</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={avatars[0]}/></td>
                    <td>{names[0]}</td>
                    <td>{wins[0]}</td>
                    <td>{losses[0]}</td>
                    <td>{points_for[0]}</td>
                    <td>{points_against[0]}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src={avatars[1]}/></td>
                    <td>{names[1]}</td>
                    <td>{wins[1]}</td>
                    <td>{losses[1]}</td>
                    <td>{points_for[1]}</td>
                    <td>{points_against[1]}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default StandingsTable