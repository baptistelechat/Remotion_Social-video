export interface IVideo {
  userName: string;
  bookType: string;
  hashtags: string[];
  gifs: string[];
  theme: {
    bgColor: string;
    textColor: string;
    accentColor: string;
  };
  safeZone: boolean;
}
