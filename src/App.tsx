import "./App.css";
import { FC, ReactElement, useState } from "react";
import UserProfile from "./components/UserProfile";
import SearchTrack from "./components/SearchTrack";
import UserPlaylists from "./components/UserPlaylists";
import PlaylistTracks from "./components/PlaylistTracks";

const App: FC = (): ReactElement => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");

  return (
    <div className="App">
      <UserProfile />
      <SearchTrack />
      <UserPlaylists
        onSelectPlaylist={setSelectedPlaylistId}
        selectedPlaylistId={selectedPlaylistId}
      />
      {selectedPlaylistId && <PlaylistTracks playlistId={selectedPlaylistId} />}
    </div>
  );
};

export default App;
