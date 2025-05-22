import "./App.css";
import { FC, ReactElement } from "react";
import UserProfile from "./components/UserProfile";
import SearchTrack from "./components/SearchTrack";
import UserPlaylists from "./components/UserPlaylists";
import PlaylistTracks from "./components/PlaylistTracks";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App: FC = (): ReactElement => {
  const selectedPlaylistId = useSelector((state: RootState) => state.playlist.selectedPlaylistId);

  return (
    <div className="App">
      <UserProfile />
      <SearchTrack />
      <UserPlaylists />
      {selectedPlaylistId && <PlaylistTracks />}
    </div>
  );
};

export default App;
