import Image from "next/image";
import { SocialIcon } from "react-social-icons";

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
              media="(min-width: 768px) and (max-width: 1366px) and (orientation: portrait)"
              srcSet="/images/hero-bg-mobile.jpg"
            />
            <source
              media="(min-width: 768px), (orientation: landscape)"
              srcSet="/images/hero-bg.jpg"
            />
            <img
              alt=""
              src="/images/hero-bg.jpg"
              className="absolute inset-0 w-full h-full object-cover object-top md:object-bottom mobile-landscape-bg-bottom"
            />
          </picture>
          {/* Ultrawide vignette overlays - hidden by default, shown via CSS media query */}
          <div
            className="hidden ultrawide-vignette-left absolute left-0 top-0 bottom-0 w-[20%] pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="hidden ultrawide-vignette-right absolute right-0 top-0 bottom-0 w-[20%] pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Top band - md+ and mobile landscape */}
        <div className="rg-top-band mobile-landscape-show tablet-landscape-blur-reduced">
          {/* Gradient blur background */}
          <div
            className="rg-top-band-blur absolute inset-0"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
            }}
          />
          <div className="rg-top-band-inner">
            <Image
              src="/images/logo-b.png"
              alt="Ronnie Grace"
              width={270}
              height={68}
              className="rg-top-logo tablet-landscape-invert tablet-landscape-scale-down mobile-landscape-invert"
            />
            <div className="rg-top-social tablet-landscape-invert tablet-landscape-scale-down mobile-landscape-invert">
              <SocialIcon
                url="https://www.instagram.com/ronniegrace/"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
              <SocialIcon
                url="https://open.spotify.com/intl-it/artist/1UpziKc0Trlyonro3W942v"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
              <SocialIcon
                url="https://www.youtube.com/@officialronniegrace"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
              <SocialIcon
                url="https://www.facebook.com/ronniegracee"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 40, height: 40 }}
              />
            </div>
          </div>
        </div>

        {/* Release block - centered (hidden on mobile landscape) */}
        <div className="rg-release-center mobile-landscape-hide-release tablet-landscape-release-top">
          <div className="rg-release-center-inner">
            <div className="rg-release-logo tablet-landscape-scale-down">
              <Image
                src="/images/dandelion-logo.svg"
                alt="Dandelion"
                width={380}
                height={150}
                className="h-auto w-auto"
                priority
              />
            </div>
            <p className="rg-release-subtitle tablet-landscape-scale-down tablet-landscape-subtitle-tight">
              OUT ON FEB 13
            </p>
          </div>
        </div>

        {/* Release block - bottom right (only shown on mobile landscape) */}
        <div className="rg-release-landscape mobile-landscape-show">
          <div className="rg-release-landscape-inner">
            <div className="rg-release-landscape-content mobile-landscape-scale">
              <div className="w-[300px]">
                <Image
                  src="/images/dandelion-logo.svg"
                  alt="Dandelion"
                  width={380}
                  height={150}
                  className="h-auto w-auto mobile-landscape-white-svg"
                  priority
                />
              </div>
              <p className="rg-release-landscape-text">OUT ON FEB 13</p>
            </div>
          </div>
        </div>

        <div className="rg-presave">
          <div className="rg-presave-inner">
            <a
              href="https://ditto.fm/ronnie_grace-dandelion"
              target="_blank"
              rel="noopener noreferrer"
              className="rg-presave-button tablet-landscape-scale-down mobile-landscape-btn-small"
            >
              PRE-SAVE
            </a>
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
                style={{ width: 38, height: 38 }}
              />
              <SocialIcon
                url="https://open.spotify.com/intl-it/artist/1UpziKc0Trlyonro3W942v"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 38, height: 38 }}
              />
              <SocialIcon
                url="https://www.youtube.com/@officialronniegrace"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 38, height: 38 }}
              />
              <SocialIcon
                url="https://www.facebook.com/ronniegracee"
                fgColor="#000000"
                bgColor="transparent"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 ease-out hover:scale-110"
                style={{ width: 38, height: 38 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom black band - md+ only, hidden on mobile landscape */}
      <div className="rg-bottom-band mobile-landscape-hide">
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Ronnie Grace. All rights reserved.
        </p>
      </div>
    </main>
  );
}
