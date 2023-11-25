import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { createContext, useState } from 'react';
import LightSwitch from './LightSwitch/LightSwitch';

const name = 'Samuel Ramon';
export const siteTitle = 'Personal Portfolio';

export type LayoutContextProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps
);

export default ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  const [theme, setTheme] = useState('dark');

  return (
    <LayoutContext.Provider value={{ theme, setTheme }}>
      <div className={`${styles.container} ${theme}`}>
        <LightSwitch />

        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content='Personal portfolio website' />
          <meta
            property='og:image'
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta property='og:title' content={siteTitle} />
          <meta property='twitter:card' content='summary_large_image' />
        </Head>

        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src={`/images/${theme}_profile.jpg`}
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href='/'>
                <a>
                  <Image
                    priority
                    src={`/images/${theme}_profile.jpg`}
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href='/'>
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>

        <main>{children}</main>

        {!home && (
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </LayoutContext.Provider>
  );
};
