import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistState = {
  selectedPlaylistId: string | null;
};

const initialState: PlaylistState = {
  selectedPlaylistId: null
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setSelectedPlaylistId: (state, action: PayloadAction<string>) => {
      state.selectedPlaylistId = action.payload;
    }
  }
});

export const { setSelectedPlaylistId } = playlistSlice.actions;

export default playlistSlice.reducer;
