import logo from '../Images/Logo.png'

export default function Header() {
    return (
       <div className='header'>
        <img src={logo} alt='meme-logo' className='header-img' />
        <p>React Course - Project 3</p>
       </div>
    )
}