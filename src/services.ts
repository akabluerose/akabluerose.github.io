import AppleMusicIcon from "./assets/apple-music.png";
import SpotifyIcon from "./assets/spotify.png";
import YoutubeIcon from "./assets/youtube.png";

const APPLE_SERVICE = 'apple'
const SPOTIFY_SERVICE = 'spotify'
const YOUTUBE_SERVICE = 'youtube'
const APPLE_MUSIC_LINK = 'https://music.apple.com/es/artist/oana-aka-bluerose/1484149987?l=en'
const SPOTIFY_LINK = 'https://open.spotify.com/artist/0zbc62OVuYDcMSN64F7ITP'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCyAIh64pLlyDJeMdz3m7s1g'
export type Service = typeof APPLE_SERVICE | typeof SPOTIFY_SERVICE | typeof YOUTUBE_SERVICE

const serviceIcons: Map<Service, string> = new Map([
  ['apple', AppleMusicIcon],
  ['spotify', SpotifyIcon],
  ['youtube', YoutubeIcon],
])

const serviceLinks: Map<Service, string> = new Map([
  ['apple', APPLE_MUSIC_LINK],
  ['spotify', SPOTIFY_LINK],
  ['youtube', YOUTUBE_LINK],
])

interface ServiceProps {
  icon: string
  link: string
}

export const useService = (service: Service): ServiceProps => {
  const icon = serviceIcons.get(service) ?? ''
  const link = serviceLinks.get(service) ?? "#"
  return {
    icon,
    link
  }
}