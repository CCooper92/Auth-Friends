import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: [],
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log({ err }));
    };
    formatData = () => {
        const formattedData = [];
        this.state.friendsList.forEach((name, age, email) => {
            formattedData.push({
                name: name.name,
                age: name.age,
                email: name.email
            })
        })
    }
    render(){
        return(
        <>
        null
        </>
        )
    }
}

export default FriendsList;