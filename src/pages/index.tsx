import Home from '../layouts/home';

export default function HomePage() {
    return (<Home>
        <div className="flex justify-center w-full h-full">
            <div className="flex flex-col items-center" >
                <img className={'p4 rounded-full'} src='img/cfg-logo.jpg' height={'256'} />
                <h1 className={'pb4'}>Crit Fumble Gaming</h1>
                <p className={'pb4 font-italic'}>If the GM doesn't kill you, the dice will.</p>
                <p className={'pb4 text-center'}>Welcome to Crit Fumble Gaming! We're a VTTRPG group and have players with some of the worst luck and dumbest ideas. We started as an in-person group in the Midwest United States, but have moved our campaigns online and have since grown to include members all over the country. We play a few long-running campaigns, as well as plenty of one-shots and "mini-campaigns" that only last a few sessions.</p>
                <p className={'pb4'}>To find out more, chat with us, or find a group to play with, join our <a style={{textDecoration: 'none'}} className={'dark:text-green-300'}href={'https://discord.gg/dZzsst6TdG'}>Discord Server</a>.</p>
            </div>
        </div>
    </Home>
    );
}

