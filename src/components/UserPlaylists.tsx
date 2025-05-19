import { useGetPlaylistsQuery } from "../api/apiSlice";
import defaultPlaylistImage from "../assets/default-playlist-image.png";

interface UserPlaylistsProps {
  onSelectPlaylist: (playlistId: string) => void;
  selectedPlaylistId: string | null;
}

const UserPlaylists = ({ onSelectPlaylist, selectedPlaylistId }: UserPlaylistsProps) => {
  const { data } = useGetPlaylistsQuery(undefined);

  const selectedPlaylist = data?.items?.find((p) => p.id === selectedPlaylistId);

  return (
    <div className="user-playlists">
      <div className="dropdown playlists-dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          id="dropdownMenuButton"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          My Playlists{" "}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {data?.items?.length ? (
            data.items.map((item) => (
              <li key={item.id}>
                <button className="dropdown-item" onClick={() => onSelectPlaylist(item.id)}>
                  <img
                    src={item.images?.length ? item.images[0].url : defaultPlaylistImage}
                    alt={item.name}
                    width={40}
                    height={40}
                    style={{ borderRadius: 5 }}
                  />{" "}
                  {item.name}
                </button>
              </li>
            ))
          ) : (
            <p className="dropdown-item">No playlists found</p>
          )}
        </ul>
      </div>
      {selectedPlaylist && (
        <div className="selected-playlist-info">
          <img
            src={selectedPlaylist.images?.[0]?.url || defaultPlaylistImage}
            alt={selectedPlaylist.name}
            width={45}
            height={45}
            className="selected-playlist-image"
          />
          <div className="selected-playlist-details">
            <div>
              <strong>{selectedPlaylist.name}</strong>
            </div>
            <div>
              <small>{selectedPlaylist.tracks.total} Tracks</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPlaylists;
