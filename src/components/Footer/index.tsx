import { CallIcon, EmailIcon, MapIcon } from "@/assets/icons";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "@/assets/icons/social";
import Link from "next/link";
import AccountLinks from "./AccountLinks";
import FooterBottom from "./FooterBottom";
import { AppStoreIcon, GooglePlayIcon } from "./icons";
import QuickLinks from "./QuickLinks";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
              Help & Support
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex gap-4.5">
                <span className="shrink-0">
                  <MapIcon className="w-6 h-6 text-blue" />
                </span>
                328 Thomas Pl, Everman, TX 76140, USA
              </li>

              <li>
                <Link
                  href="https://wa.me/18173309020"
                  target="_blank"
                  className="flex items-center gap-4.5"
                >
                  <WhatsAppIcon className="size-5 text-blue" />
                  (817) 330 9020
                </Link>
              </li>

              <li>
                <Link
                  href="tel:+14697086328"
                  className="flex items-center gap-4.5"
                >
                  <CallIcon className="w-6 h-6 text-blue" />
                  (469) 708 6328
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:info@suncitypalletsliquidation.com"
                  className="flex items-center gap-4.5"
                >
                  <EmailIcon className="w-6 h-6 text-blue" />
                  info@suncitypalletsliquidation.com
                </Link>
              </li>
            </ul>

            <FooterSocials />
          </div>

          <AccountLinks />

          <QuickLinks />

          <div
            style={{ visibility: "hidden" }}
            className="w-full hidden md:block sm:w-auto"
          >
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark lg:text-right">
              Download App
            </h2>

            <p className="mb-4 lg:text-right text-custom-sm">
              Save $3 With App & New User only
            </p>

            <ul className="flex flex-col gap-3 lg:items-end">
              <li>
                <Link
                  className="inline-flex items-center gap-3 py-[9px] pl-4 pr-7.5 text-white rounded-xl bg-dark ease-out duration-200 hover:bg-opacity-95"
                  href="#"
                >
                  <AppStoreIcon />

                  <div>
                    <span className="block text-custom-xs">
                      Download on the
                    </span>
                    <p className="font-medium">App Store</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  className="inline-flex items-center gap-3 py-[9px] pl-4 pr-8.5 text-white rounded-xl bg-blue ease-out duration-200 hover:bg-opacity-95"
                  href="#"
                >
                  <GooglePlayIcon />

                  <div>
                    <span className="block text-custom-xs"> Get in On </span>
                    <p className="font-medium">Google Play</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
