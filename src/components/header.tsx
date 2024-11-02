import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.nav}>
        <Image
          src={'/assets/header-logo.svg'}
          alt="logo"
          width={250}
          height={72}
          priority
        />

        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'#'}>O Escritório</Link>
          </li>
          <li>
            <Link href={'#'}>Áreas de Atuação</Link>
          </li>
          <li>
            <Link href={'#'}>Blog</Link>
          </li>
          <li>
            <Link href={'#'}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
