export interface IVideo {
  userName: string;
  bookType: string;
  bookInfo: {
    title: string;
    author: string;
    images: string[];
    price: string;
  };
  hashtags: string[];
  gifs: string[];
  theme: {
    bgColor: string;
    textColor: string;
    accentColor: string;
  };
  safeZone: boolean;
}
