import styles from 'highlight.js/styles/github-dark-dimmed.css';
import { Outlet } from '@remix-run/react';

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
}

export default function Blog() {
    return (
        <div className='text-center sm:text-left flex justify-center'>
            <div className='prose sm:prose-base lg:prose-xl py-10'>
                <Outlet />
            </div>
        </div>
    )
}