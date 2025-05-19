import { useGetUserQuery } from "../api/apiSlice";
import spotifyIcon from "../assets/spotify-icon.svg";
import userIcon from "../assets/default-user-image.svg";

const UserProfile = () => {
  const { data: user } = useGetUserQuery(undefined);

  return (
    <div className="App-header">
      <div className="header-logo">
        <img src={spotifyIcon} alt="logo" width={45} height={45} />
        <h4>Apptweak Spotify Challenge</h4>
      </div>
      <div className="user-info">
        <div className="user-name">{user?.display_name}</div>
        <img
          className="user-image"
          src={user?.images?.length ? user.images[0].url : userIcon}
          alt={user?.type}
        />
      </div>
    </div>
  );
};

export default UserProfile;
