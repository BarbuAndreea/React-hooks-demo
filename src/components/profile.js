import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "./changeProfile";

export const Profile = () => {
    const { username } = useContext(AppContext);

    return (
        <div>
            Profile page: Hello, {username}
            <ChangeProfile />
        </div>
    )
}
