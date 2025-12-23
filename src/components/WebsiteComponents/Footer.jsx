import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialIcons = {
    facebook: "/Images/facebook.png",
    instagram: "/Images/instagram.png",
    tiktok: "/Images/tiktok.png",
    pinterest: "/Images/pinterest.png",
    x: "/Images/x.png",
    linkedin: "/Images/linkedin.png",
  };

  return (
    <footer className="bg-[#F9FAFB] text-black py-10 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        {/* Left Section: Logo & About */}
        <div>
          <Image
            src="/Images/CarNKeyLogoBlack.png"
            width={160}
            height={50}
            alt="CarNKey"
          />
          <p className="text-[#6B7280]  text-sm mt-3 leading-relaxed max-w-[280px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking...
          </p>

          {/* Social Icons */}
          <p className="mt-9 text-[15px] font-medium ">Connect with US</p>
          <div className="flex flex-wrap gap-3 mt-2">
            {Object.entries(socialIcons).map(([name, path]) => (
              <Link key={name} href="#" legacyBehavior>
                <a className="w-5 h-5">
                  <Image src={path} alt={name} width={20} height={20} />
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile App Links */}
          <p className="mt-12 text-[15px] font-medium ">Our Mobile App</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Image
              src="/Images/app-store.png"
              alt="App Store"
              width={130}
              height={40}
            />
            <Image
              src="/Images/google-play.png"
              alt="Google Play"
              width={130}
              height={40}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[15px] font-bold ">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-[15px] text-[#374151]">
            {[
              "Shop New Cars",
              "Shop Used Cars",
              "Sell Your Car",
              "Find a Dealer",
              "Get an Instant Offer",
              "Research",
              "Compare Cars",
              "Trade-In Your Car",
              "Find a Repair Shop",
              "Vehicle History Reports",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-red-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[15px] font-bold ">Services</h3>
          <ul className="mt-4 space-y-2 text-[15px] text-[#374151]">
            {[
              "Car Buying & Selling",
              "Car Rental Services",
              "Auto Repair & Workshops",
              "Car Loan & Financing",
              "Vehicle History Check",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-red-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-[15px] font-bold mt-6 ">Sell Your Car</h3>
          <ul className="mt-3 space-y-2 text-[15px] text-[#374151]">
            {["Instant Car Valuation", "List Your Car"].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-red-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop by Category */}
        <div>
          <h3 className="text-[15px] font-bold ">Shop by Category</h3>
          <ul className="mt-4 space-y-2 text-[15px] text-[#374151]">
            {[
              "Certified Used Cars",
              "Budget-Friendly Cars",
              "SUVs & 4x4",
              "Electric & Hybrid Cars",
              "Trucks & Commercial Vehicles",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-red-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-[15px] font-bold mt-6 ">Personalized Deals</h3>
          <ul className="mt-3 space-y-2 text-[15px] text-[#374151]">
            {[
              "Find Cars Near You",
              "Use My Location for Personalized Deals",
              "Top Car Deals in Your City",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-red-500">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center  text-[14px] text-[#6B7280]">
        <p>© 2025 carnkey.com. All rights reserved.</p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {[
            "Terms of Service",
            "Privacy Policy",
            "Ad Choices",
            "Sitemap",
            "FAQs",
          ].map((link, index) => (
            <Link key={index} href="#" className="hover:text-red-500">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
