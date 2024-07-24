'use client';

import { siteConfig } from '@/config/site';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  const theme = useTheme();

  return (
    <div className="relative">
      <div className="bg-gradient-to-r absolute inset-0 from-zinc-900 via-zinc-700 to-zinc-900 h-[1.5px] rounded-full "></div>
      <div className="max-w-[1440px] mx-auto flex md:flex-row flex-col justify-between gap-7  items-start md:p-20 p-10">
        <div>
          <Link
            href="/"
            className="text-2xl flex items-center space-x-1 font-semibold"
          >
            {theme.theme === 'dark' ? (
              <Image src="/logo-white.png" alt="Logo" height={25} width={25} />
            ) : (
              <Image src="/logo-black.png" alt="Logo" height={25} width={25} />
            )}
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <div>@{new Date().getFullYear()}</div>
        </div>
        <div className="grid grid-cols-3  gap-10 items-start ">
          <div className="flex flex-col gap-4">
            <div>Pricing</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Pricing</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>{' '}
          <div className="flex flex-col gap-4">
            <div>Pricing</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 ">
        AGENTGENESIS
      </p>
    </div>
  );
};

export default Footer;
