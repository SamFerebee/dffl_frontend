import React, { useState, useEffect } from "react"

const StandingsTable = () => {
    const [allData, setAllData] = useState(null);
    const [theTableData, setTheTableData] = useState(null);


    useEffect(()=>{
        fetch("http://localhost:3000/get_season_data")
            .then(r=>r.json())
            .then(data=>{
                console.log(data);
                setAllData(data);
                let temp = [];
                for(let user in data){
                    let t = <tr key={data[user].name}>
                        <td>{parseInt(user)}</td>
                        <td><img src={data[user].avatar} className="standingsAvatar"/></td>
                        <td>{data[user].name}</td>
                        <td>{data[user].wins}</td>
                        <td>{data[user].losses}</td>
                        <td>{data[user].points_for}</td>
                        <td>{data[user].points_against}</td>
                    </tr>
                    temp.push(t);
                }
                setTheTableData(temp);
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
                    {theTableData}
            </tbody>
        </table>
    )
}

export default StandingsTable