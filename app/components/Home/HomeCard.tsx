import React from 'react';
// import styles from './Home.module.css';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '../../api/auth/authOptions';
import Image from "next/image";
import BullhornLogo from '@/public/images/Bullhorn_logo_linear.png';
import GlobalHoldingsLogo from '@/public/images/Global_Holdings_Logo.jpg';
import IconDevelopmentBlack from '@/public/images/icon-development-black.svg';
import IconDevelopmentWhite from '@/public/images/icon-development-white.svg';
import IconContentWhite from '@/public/images/icon-content-white.svg';
import IconContentBlack from '@/public/images/icon-content-black.svg';
import MobileIconWhite from '@/public/images/icon-mobile-white.svg';
import MobileIconBlack from '@/public/images/icon-mobile-black.svg';
import EmailIconWhite from '@/public/images/icon-email-white.svg';
import EmailIconBlack from '@/public/images/icon-email-black.svg';
import GraphicsIconWhite from '@/public/images/icon-design-white.svg';
import GraphicsIconBlack from '@/public/images/icon-design-black.svg';
import DesignIconWhite from '@/public/images/icon-graphics-white.svg';
import DesignIconBlack from '@/public/images/icon-graphics-black.svg';
import Headshot from '@/public/images/headshot.jpg';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ContactForm from '../ContactForm/ContactForm';

const HomeCard = async () => {
  // const session = await getServerSession(authOptions);

  return (
    <>
      {/* <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}> */}
      {/* <h1>Hello{ session ? <span>&nbsp;{session.user?.name}!</span> : "!" }</h1> */}
      <div className="hero min-h-screen bg-opacity-80 bg-primary text-slate-50 mb-6">
        <div className="hero-content flex-col lg:flex-row">
          <Image className="max-w-sm border-3 border-primary rounded-full shadow-2xl" src={Headshot} alt="Jon Sousa Portrait"/>
          <div className="bg-opacity-100 p-4 rounded-lg">
            <h1 className="text-5xl font-bold">Hello, I&apos;m Jon Sousa!</h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="py-6 flex">Let&apos;s connect <ChevronDoubleRightIcon className="pb-2 ml-2 mr-2 h-8 w-8 text-yellow-500" /> 
                  <Link href="https://github.com/Oragoss/">
                    <svg style={{fill: "#fff", paddingBottom: "8px", marginRight: "1rem"}} xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                  </Link>
                  <Link href="https://www.linkedin.com/in/jon-sousa/">
                    <svg style={{fill: "#fff", paddingBottom: "8px"}} xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="bg-slate-200 p-12 mb-6" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2
              className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              Who am I?
            </h2>
            <h4
              className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              I&apos;m Jon Sousa, a Fullstack Software Engineer
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <div
              className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
            >
               <p className="py-6 flex">CONNECT WITH ME <ChevronDoubleRightIcon className="pb-2 ml-2 mr-2 h-8 w-8 text-primary" /> 
                  <Link href="https://github.com/Oragoss/">
                    <svg style={{paddingBottom: "8px", marginRight: "1rem"}} xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                  </Link>
                  <Link href="https://www.linkedin.com/in/jon-sousa/">
                    <svg style={{paddingBottom: "8px"}} xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                  </Link>
                </p>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div className="flex text-center">
              <h2 className="font-body font-semibold uppercase text-black">
                Skills TODO: Make this bigger and center it
              </h2>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  React.js
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">3 years</h3>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">C#/.Net/.Net Core</h4>
                <h3 className="font-body text-3xl font-bold text-primary">4 years</h3>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Angular
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">3 years</h3>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Node.js and express</h4>
                <h3 className="font-body text-3xl font-bold text-primary">4 years</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Design Skills Section */}
      <div className="py-16 md:py-20 bg-slate-50 mb-6" id="services">
        <h2
          className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
        >
          Here's what I do
        </h2>
        <h3
          className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          These are the services I offer
        </h3>

        <div
          className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        >
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src={IconDevelopmentWhite}
                  alt="development icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src={IconDevelopmentBlack}
                  alt="development icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3
                className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-white lg:text-xl"
              >
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src={IconContentWhite}
                  alt="content marketing icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src={IconContentBlack}
                  alt="content marketing icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3
                className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-white lg:text-xl"
              >
                Software Architecture
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src={MobileIconWhite}
                  alt="Mobile Application icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src={MobileIconBlack}
                  alt="Mobile Application icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3
                className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-white lg:text-xl"
              >
                Front End Development
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src={EmailIconWhite}
                  alt="Email Marketing icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src={EmailIconBlack}
                  alt="Email Marketing icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3
                className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-white lg:text-xl"
              >
                Backend Development
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src={GraphicsIconWhite}
                  alt="Theme Design icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src={GraphicsIconBlack}
                  alt="Theme Design icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3
                className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-white lg:text-xl"
              >
                Web Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src={DesignIconWhite}
                  alt="Graphic Design icon"
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src={DesignIconBlack}
                  alt="Graphic Design icon"
                />
              </div>
            </div>
            <div className="text-center">
              <h3
                className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-white lg:text-xl"
              >
                Agile Development Planning
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio of projects */}
      {/* In the future, add projects employers might be interested from github */}
      {/* Add github here??? */}

      {/* Work Experience */}
      <div className="py-16 md:py-20 bg-slate-50 mb-6" id="work">
        <h2
          className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
        >
          work experience
        </h2>
        <h3
          className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          For my full resume, contact me down below
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src={BullhornLogo}
                    className="h-auto w-32"
                    alt="company logo"
                  />
                </span>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block pt-2 font-header text-xl font-bold text-primary">
                      Bullhorn, VMS Sync Engineering Tech Lead
                    </span>
                    <span className="block font-body font-bold text-slate-400 text-sm">
                      Apr 2015 - Mar 2018
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src={GlobalHoldingsLogo}
                    className="h-auto w-20"
                    alt="company logo"
                  />
                </span>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block pt-2 font-header text-xl font-bold text-primary">
                      Bullhorn, VMS Sync Engineering Tech Lead
                    </span>
                    <span className="block font-body font-bold text-slate-400 text-sm">
                      Apr 2015 - Mar 2018
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src={BullhornLogo}
                    className="h-auto w-32"
                    alt="company logo"
                  />
                </span>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block pt-2 font-header text-xl font-bold text-primary">
                      Bullhorn, VMS Sync Engineering Tech Lead
                    </span>
                    <span className="block font-body font-bold text-slate-400 text-sm">
                      Apr 2015 - Mar 2018
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <ContactForm />
    </>
  )
}

export default HomeCard