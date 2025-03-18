import headerIcon from '../assets/header-icon.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={headerIcon} alt="Chef Claude logo" className="header-logo" />
      <h1 className="header-title">Chef Claude</h1>
    </header>
  )
}
