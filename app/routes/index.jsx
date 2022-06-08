import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <body>
      <div className='' style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <br />
        <div className='prose lg:prose-xl py-10'>
          <p>"Busquem ser úteis. Isso é muito difícil." Elon Musk</p>
          <ul >
            <li>
              <Link to={'/blog'}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}
