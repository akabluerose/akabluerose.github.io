import AppleMusicIcon from "../../assets/apple-music.png";
import SpotifyIcon from "../../assets/spotify.png";
import YoutubeIcon from "../../assets/youtube.png";
import SongIcon from "../../assets/maldad.png";

const APPLE_MUSIC_LINK = 'https://music.apple.com/es/artist/oana-aka-bluerose/1484149987?l=en'
const SPOTIFY_LINK = 'https://open.spotify.com/artist/0zbc62OVuYDcMSN64F7ITP'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCyAIh64pLlyDJeMdz3m7s1g'
const LATEST_LINK = 'https://www.youtube.com/watch?v=EDfqX8pj4XA&feature=youtu.be'
export type Service = 'apple' | 'spotify' | 'youtube' | 'latest'

const serviceIcons: Map<Service, string> = new Map([
  ['apple', AppleMusicIcon],
  ['spotify', SpotifyIcon],
  ['youtube', YoutubeIcon],
  ['latest', SongIcon],
])

const serviceLinks: Map<Service, string> = new Map([
  ['apple', APPLE_MUSIC_LINK],
  ['spotify', SPOTIFY_LINK],
  ['youtube', YOUTUBE_LINK],
  ['latest', LATEST_LINK],
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