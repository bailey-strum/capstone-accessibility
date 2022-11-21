import "./dashboard.css";
import { auth } from "../firebase";
import Wrapper from "../Components/Wrapper";
import {Component} from "react";

class Profile extends Component{
    render() {
        const userName = auth.currentUser;
        if(userName !== null)
            return(
                <Wrapper>
                    <div>
                    <h2> Welcome {userName.email}!</h2>
                    </div>
                </Wrapper>
            )
    }
}

/*function Profile() {
    const user = auth.currentUser;
    onAuthStateChanged(auth,(user) => {
        if(user){
            const displayname = user.displayName;
        }
    });
    return(
        <Wrapper>
                    <div>
                    <h2> Welcome {}!</h2>
                    </div>
                </Wrapper>
    )
}
*/
export default Profile;