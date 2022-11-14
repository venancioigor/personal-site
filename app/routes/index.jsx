import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <body className=''>
      <div className=''>
        <br />
        <div className='m-auto prose lg:prose-xl py-10' style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
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

