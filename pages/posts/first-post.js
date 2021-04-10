import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Oksubin.</h1>
      <p>My hobby is watching a movie.</p><h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}