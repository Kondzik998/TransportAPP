import clsx from 'clsx';
import Head from 'next/head';
import type { PropsWithChildren } from 'react';

import styles from './layout.module.scss';

type LayoutProps = {
  title: string;
  center?: boolean;
};

export const Layout = ({
  children,
  title,
  center,
}: PropsWithChildren<LayoutProps>) => {
  const layoutStyles = clsx(styles.layout, center && styles.center);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={layoutStyles}>{children}</div>
    </>
  );
};
