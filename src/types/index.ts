export type User = {
  country: string;
  display_name: string;
  email: string;
  id: string;
  images: [{ url: string }];
  type: string;
};
export type SpotifyPlaylist = {
  items: [
    {
      id: string;
      name: string;
      tracks: { total: number };
      images: [{ url: string }];
      external_urls: { spotify: string };
    }
  ];
  total: number;
};
export type SpotifyTrack = {
  items: {
    track: {
      id: string;
      name: string;
      artists: { name: string }[];
      album: {
        images: { url: string }[];
        name: string;
        release_date: string;
      };
      duration_ms: number;
      external_urls: { spotify: string };
    };
    total: number;
  }[];
};

export type SpotifyTrackItem = [{ name: string }];
