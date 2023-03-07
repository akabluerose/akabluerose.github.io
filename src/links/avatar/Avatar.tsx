import AvatarIcon from '../../assets/avatar2.png'
import './avatar.scss'

export const Avatar = () => {
  return (
      <div className={"avatar-container"}>
        <img alt="avatar" src={AvatarIcon}/>
        <span>AKA BLUEROSE</span>
      </div>
  )
}