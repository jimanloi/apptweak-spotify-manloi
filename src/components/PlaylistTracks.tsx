import { useGetPlaylistTracksQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import defaultImage from "../assets/default-playlist-image.png";
import { selectPlaylist } from "../containers/playlist/selectors";

const PlaylistTracks = () => {
  const selectedPlaylistId = useSelector(selectPlaylist);
  const { data: tracks } = useGetPlaylistTracksQuery(selectedPlaylistId ?? "", {
    skip: !selectedPlaylistId
  });

  return (
    <div className="tracks">
      {tracks ? (
        tracks.items.length > 0 ? (
          <>
            <div className="track-header">
              <div className="track-header-title">Title</div>
              <div className="track-header-album">Album</div>
              <div className="track-header-release">Release Date</div>
            </div>
            {tracks.items.map((item) => (
              <div className="track-item" key={item.track.id}>
                <img
                  src={item.track.album.images[0].url || defaultImage}
                  alt={item.track.name}
                  className="track-item-image"
                />
                <div className="track-name-container">
                  <div className="track-name">{item.track.name}</div>
                  <div className="track-artists">
                    {item.track.artists.map((artist) => artist.name).join(", ")}
                  </div>
                </div>
                <div className="track-album">{item.track.album.name}</div>
                <div className="track-release">{item.track.album.release_date}</div>
              </div>
            ))}
          </>
        ) : (
          <p>No tracks found</p>
        )
      ) : null}
    </div>
  );
};

export default PlaylistTracks;
