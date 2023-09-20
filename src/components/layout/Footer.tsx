
import { Link } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode';
import i18n from '../../i18n';

const styles = {
  footer: {
    textAlign: 'center',
    padding: '16px',
    margin: 'auto 16px',
  }
} as any;

export default function Footer() {
  const { toggleDark } = useDarkMode()
  function changeLang(lang: string) {
    i18n.changeLanguage(lang)
  }
  const linkClass = 'p-2 text-center flex'
  return (
    <footer style = {styles.footer}>
      <div className="flex justify-center w-full pb-4">
        <nav className="flex mt-6 text-xl" dir="utd">
          <div className={linkClass}>
            <a rel="noopener noreferrer" href={'https://www.patreon.com/critfumbleweb'} target="_blank">
              <img
                src={"/img/patreon.avif"}
                height={50}
                alt={'Support us on Patreon'}
              />
            </a>
          </div>
          {/* <div className={linkClass}>
            <a rel="noopener noreferrer" href={'https://startplaying.games/gm/crit-fumble/review'} target="_blank">
              <img
                src={"/img/startplaying.png"}
                height={50}
                alt={'Leave us a Review on StartPlaying.Games'}
              />
            </a>
          </div>
          <div className={linkClass}>
            <a rel="noopener noreferrer" href={'https://app.roll20.net/users/6244861/crit-fumble-gaming'} target="_blank">
              <img
                src={"/img/roll20.png"}
                height={50}
                alt={'View our Roll20 Profile'}
              />
            </a>
          </div> */}
          {/* <div className={linkClass}>
            <a rel="noopener noreferrer" href={'https://affiliates.fantasygrounds.com/324256/15958/banner_7299'} target="_blank">
              <img
                src={"https://affiliates.fantasygrounds.com/img/banners/316034_3264676826.jpg"}
                height={50}
                alt={'Shop on Fantasy Grounds'}
              />
            </a>
          </div> */}
        </nav>
      </div>
      <div className={'text-center'}>
        <a rel="noopener noreferrer" href={'https://discord.gg/dZzsst6TdG'} target="_blank">
          <img
            src={"/img/discord.avif"}
            height={50}
            alt={'Join our Discord Server'}
          />
        </a><br />
        <button onClick={toggleDark} style={{height: '1.6em', width: '1.6em', marginBottom: '16px'}} className="p1 cursor-pointer bg-transparent transition-colors duration-300 border-none  decoration-none text-primary-500 hover:bg-primary-600 hover:text-white font-light rounded-full centered !outline-none text-xl" >
          <div i="carbon-sun dark:carbon-moon " />
        </button>
        <p>© {new Date().getFullYear()}, Crit Fumble Gaming</p>
      </div>
    </footer>
  )
}
