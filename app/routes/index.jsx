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
      <script id="mcjs">!function(c,h,i,m,p){m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/940db129975c24f3d1b233cac/0f79aa2d7981e20e939558344.js");</script>
    </body>
  );
}
