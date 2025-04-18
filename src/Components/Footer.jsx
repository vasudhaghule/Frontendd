import  Mail  from "../Assets/mail-fill.png";
import Logo from "../Assets/logo.png"
import  Phone from "../Assets/phone-fill.png"
import Facebook from "../Assets/Fbook.png"
import Twitter from "../Assets/Twitter.png"
import Wapp from  "../Assets/whatsapp-fill.png";
import Pintrest from "../Assets/pinterest.png";
import Insta from "../Assets/Insta.png";
import Ytube from "../Assets/Ytube.png"



const Footer = () => {

    return (
      <footer className="bg-[#eaf6ff] rounded-[20px] px-6 md:px-20 py-10 text-[#000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          
          {/* Left Section - Logo + Description + Address + Contacts */}
          <div className="flex-1 space-y-4">
            <img src={Logo} alt="Logo" className="w-32" />
            <p className="text-sm text-[16px]">
              The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
            </p>
            <div>
              <p className="font-bold mb-1">Address</p>
              <p className="text-sm text-[16px]">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharashtra, India.
              </p>
            </div>
            <div>
              <p className="font-bold mb-1">Contacts</p>
              <div className="flex items-center gap-2 text-sm mb-1 text-[16px]">
                <img src={Mail} alt="Email" className="w-[24px] h-[24px]" />
                hello@osumare.in
              </div>
              <div className="flex items-center gap-2 text-sm text-[16px]">
                <img src={Phone} alt="Phone" className="w-[24px] h-[24px]" />
                +91 8459 8762 26
              </div>
            </div>
          </div>
  
          {/* Middle Section - Menu */}
          <div className="flex-1 ">
            <p className="font-bold mb-3 ">Menu</p>
            <ul className="space-y-2 text-sm">
              <li className="text-[16px]"><a href="#">Home</a></li>
              <li className="text-[16px]"><a href="#">About</a></li>
              <li className="text-[16px]"><a href="#">Services</a></li>
              <li className="text-[16px]"><a href="#">Work</a></li>
              <li className="text-[16px]"><a href="#">Blog</a></li>
              <li className="text-[16px]"><a href="#">Career</a></li>
            </ul>
          </div>
  
          {/* Right Section - Social */}
          <div className="flex-1">
            <p className="font-bold mb-3">Social</p>
            <div className="flex flex-wrap gap-4 mt-2">
              <img src={Twitter} alt="X" className="w-[40px] h-[40px]" />
              <img src={Facebook} alt="Facebook" className="w-[40px] h-[40px]" />
               <img src={Ytube} alt="YouTube" className="w-[40px] h-[40px]" />
              <img src={Pintrest} alt="Pinterest" className="w-[40px] h-[40px]" />
              <img src={Wapp} alt="WhatsApp" className="w-[40px] h-[40px]" />
              <img src={Insta} alt="Instagram" className="w-[40px] h-[40px]" />
            </div>
          </div>
        </div>
  
        {/* Bottom Text */}
        <div className="text-center text-xs text-[#000C1A] mt-10 text-[16px]">
          © 2023 Osumare. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  