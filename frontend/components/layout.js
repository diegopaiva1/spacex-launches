import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Container } from 'react-bootstrap'

export default function Layout(props) {
  return (
    <div className="flex-wrapper">
     <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather"/>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            props.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={ props.title } />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/spacex-logo-1.svg"
                  width={350}
                  height={100}
                  className="d-inline-block align-top"
                  alt="SpaceX logo"
                />
              </a>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="m-auto mt-5">
        <main>{props.children}</main>
      </Container>
      <Navbar bg="light" className="mt-4">
        <Container>
          <small className="mx-auto my-4 text-center text-muted">
            <a href="https://github.com/r-spacex/SpaceX-API" target="_blank">SpaceX API on Github</a>
            <br/>
            <br/>
            "We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with
            Space Exploration Technologies Corp (SpaceX), or any of its subsidiaries or its affiliates.
            The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners."
            <br/>
            <br/>
            This website was developed by Diego Paiva
          </small>
        </Container>
      </Navbar>
    </div>
  )
}
