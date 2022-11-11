
import { Link, useLoaderData } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';
import * as firstPost from './o-que-e-javascript-teste.mdx'
import * as secondPost from './seja-util.mdx'
import * as thirdPost from './fazer-um-post-request-com-formulario-usando-fetch-javascript.mdx'

function postFromModule(mod) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}
export const loader = () => {
    return [postFromModule(firstPost), postFromModule(secondPost), postFromModule(thirdPost)];
};

export default function BlogIndex() {
    const posts = useLoaderData();
    return (
        <div className='prose  lg:prose-xl py-10 pl-10'>
            <h3>Posts do Blog</h3>
            <div className=''>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link to={post.slug}>{post.title}</Link>
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