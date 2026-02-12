"use client";

import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { SiApple, SiSpotify, SiTidal, SiYoutube } from "react-icons/si";

export default function Home() {
  return (
    <main className="rg-page">
      {/* Main content area */}
      <div className="rg-hero">
        {/* Background Image - art-directed for mobile/desktop */}
        <div className="rg-hero-bg">
          <picture>
            <source
              media="(max-width: 767px) and (orientation: portrait)"
              srcSet="/images/hero-bg-mobile.jpg"
            />
            <source
              media="(min-width: 768px), (orientation: landscape)"
              srcSet="/images/hero-bg.jpg"
            />
            <img alt="" src="/images/hero-bg.jpg" className="rg-hero-bg-img" />
          </picture>
          {/* Ultrawide vignette overlays - shown via CSS media query */}
          <div
            className="hidden ultrawide-vignette-left absolute left-0 top-0 bottom-0 w-[20%] pointer-events-none z-1"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="hidden ultrawide-vignette-right absolute right-0 top-0 bottom-0 w-[20%] pointer-events-none z-1"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Top band with scrim - always readable, no color inversions needed */}
        <div className="rg-top-band mobile-landscape-show">
          <div className="rg-top-band-inner">
            <Image
              src="/images/logo-w.png"
              alt="Ronnie Grace"
              width={270}
              height={68}
              className="rg-top-logo"
            />
            <div className="rg-top-social">
              <SocialIcon
                url="https://www.instagram.com/ronniegrace/"
                fgColor="#ffffff"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
              <SocialIcon
                url="https://open.spotify.com/intl-it/artist/1UpziKc0Trlyonro3W942v"
                fgColor="#ffffff"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
              <SocialIcon
                url="https://www.youtube.com/@officialronniegrace"
                fgColor="#ffffff"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
              <SocialIcon
                url="https://www.facebook.com/ronniegracee"
                fgColor="#ffffff"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
            </div>
          </div>
        </div>

        {/* Release block - centered (hidden on wide aspect ratios) */}
        <div className="rg-release-center rg-release-center-post mobile-landscape-hide-release">
          <div className="rg-release-center-inner">
            <div className="rg-release-logo">
              <Image
                src="/images/dandelion-logo.svg"
                alt="Dandelion"
                width={380}
                height={150}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="rg-release-subtitle">OUT NOW</p>
            <div className="rg-streaming-icons">
              <a
                href="https://open.spotify.com/album/6EfaiewnYYMJiUVFADRUc1?si=2_zxsaJySeW896_jZr-qIg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="rg-streaming-icon"
              >
                <SiSpotify size={30} />
              </a>
              <a
                href="https://music.youtube.com/playlist?list=OLAK5uy_lFzmRubmys_J0RwaWo3UAjHl_1iVpznHs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Music"
                className="rg-streaming-icon"
              >
                <SiYoutube size={30} />
              </a>
              <a
                href="https://music.apple.com/it/album/dandelion-single/1868087095"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apple Music"
                className="rg-streaming-icon"
              >
                <SiApple size={30} />
              </a>
              <a
                href="https://tidal.com/album/488761048"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tidal"
                className="rg-streaming-icon"
              >
                <SiTidal size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Release block - bottom right (only shown on wide aspect ratios) */}
        <div className="rg-release-landscape mobile-landscape-show">
          <div className="rg-release-landscape-inner">
            <div className="rg-release-landscape-content mobile-landscape-scale">
              <div style={{ width: "min(300px, 40vw)" }}>
                <Image
                  src="/images/dandelion-logo.svg"
                  alt="Dandelion"
                  width={380}
                  height={150}
                  className="h-auto w-full mobile-landscape-white-svg"
                  priority
                />
              </div>
              <p className="rg-release-landscape-text">OUT NOW</p>
              <div className="rg-streaming-icons-landscape">
                <a
                  href="https://open.spotify.com/album/6EfaiewnYYMJiUVFADRUc1?si=2_zxsaJySeW896_jZr-qIg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify"
                  className="rg-streaming-icon"
                >
                  <SiSpotify size={26} />
                </a>
                <a
                  href="https://music.youtube.com/playlist?list=OLAK5uy_lFzmRubmys_J0RwaWo3UAjHl_1iVpznHs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Music"
                  className="rg-streaming-icon"
                >
                  <SiYoutube size={26} />
                </a>
                <a
                  href="https://music.apple.com/it/album/dandelion-single/1868087095"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Apple Music"
                  className="rg-streaming-icon"
                >
                  <SiApple size={26} />
                </a>
                <a
                  href="https://tidal.com/album/488761048"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tidal"
                  className="rg-streaming-icon"
                >
                  <SiTidal size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content - portrait mobile only */}
        <div className="rg-mobile-content mobile-landscape-hide">
          {/* Logo */}
          <Image
            src="/images/logo-b.png"
            alt="Ronnie Grace"
            width={270}
            height={68}
            priority
            className="rg-mobile-logo"
          />
          {/* Mobile social icons */}
          <div className="rg-mobile-social">
            <div className="rg-mobile-social-row">
              <SocialIcon
                url="https://www.instagram.com/ronniegrace/"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 36, height: 36 }}
              />
              <SocialIcon
                url="https://open.spotify.com/intl-it/artist/1UpziKc0Trlyonro3W942v"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 36, height: 36 }}
              />
              <SocialIcon
                url="https://www.youtube.com/@officialronniegrace"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 36, height: 36 }}
              />
              <SocialIcon
                url="https://www.facebook.com/ronniegracee"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 36, height: 36 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom black band - md+ only */}
      <div className="rg-bottom-band">
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Ronnie Grace. All rights reserved.
        </p>
      </div>
    </main>
  );
}
