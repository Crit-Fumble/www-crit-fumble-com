import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../layouts/home';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/reducers';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
    const [name, setName] = useState('');
    const navigate = useNavigate()
    const username = useSelector((state: RootState) => state.user);
    const { t } = useTranslation()
    const features = ['This template has also the dark mode', 'Fully written in Typescript & TSX', 'File based routing', 'Layout system', 'Shared state management with Redux', 'React Hooks', 'Localisation with React-i18next', 'Use icons from any icon sets with classes & attributes']


    return (<Home>
        <div className="flex justify-center w-full h-full">
            <div className="flex flex-col items-center" >
                <img className={'p4 rounded-full'} src='img/cfg-logo.jpg' height={'256'} />
                <h1 className={'pb4'}>Crit Fumble Gaming</h1>
                <p className={'pb4 font-italic'}>If the GM doesn't kill you, the dice will.</p>
                <p className={'pb4'}>Welcome to Crit Fumble Gaming! We're a VTTRPG group and have players with some of the worst luck and dumbest ideas. We started as an in-person group in the Midwest United States, but have moved many of our games online and have since grown to include members all over the country.</p>
                <p className={'pb4'}>To find out more, chat with us, or find a group to play with, join our <a style={{textDecoration: 'none'}} className={'dark:text-green-300'}href={'https://discord.gg/dZzsst6TdG'}>Discord Server</a>.</p>
            </div>
        </div>
    </Home>
    );
}

