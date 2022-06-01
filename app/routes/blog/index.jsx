import { useLoaderData } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';
import * as firstPost from './o-que-e-javascript-teste.mdx'
import { Link } from 'remix';


function postFromModule(mod) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}
export const loader = () => {
    return [postFromModule(firstPost)];
};

export default function BlogIndex() {
    const posts = useLoaderData();
    return (
        <div className='prose lg:prose-xl py-10 pl-10'>
            <h2>Posts</h2>
            <div className='flex justify-center'>
                <ul>
                    {posts.map((post) => (
                        <li key={'posts/' + post.slug}>
                            <Link to={'posts/' + post.slug}>{post.title}</Link>
                            {post.description ? (
                                <p className='m-0 lg:m-0'>{post.description}</p>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}