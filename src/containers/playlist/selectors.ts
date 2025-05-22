import { RootState } from "../../store/store";

const playlistSelectors = {
  selectPlaylist: (state: RootState) => state.playlist.selectedPlaylistId
};

export const { selectPlaylist } = playlistSelectors;
