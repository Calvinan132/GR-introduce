const socials = [
  {
    name: "Github",
    url: "https://github.com/Calvinan132",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
  },
];
import logo from "../../../public/assets/CHEVELOGO.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* CỘT 1: THÔNG TIN TRƯỜNG */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16  rounded-lg flex items-center justify-center  text-sm font-black ">
              <Image src={logo} alt="Logo" className="object-contain" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">
              CHE<span className="text-[#FBBF24]">VE</span>
            </span>
            <span className="text-xs uppercase tracking-widest text-[#fffff]">
              Team
            </span>
          </div>
          <p className="text-[11px] text-white/70 uppercase tracking-[0.2em] font-bold leading-relaxed">
            Trường Đại học Công nghệ Thông tin <br />
            Đại học Quốc gia TP.HCM
          </p>
        </div>

        {/* CỘT 2: LIÊN HỆ */}
        <div className="space-y-4">
          <span className="font-black text-xs uppercase tracking-widest text-[#FBBF24]">
            Liên Hệ
          </span>
          <div className="space-y-2">
            <p className="text-[11px] text-white/70 uppercase tracking-widest font-medium leading-relaxed">
              <span className="text-white font-bold">Địa chỉ:</span> Khu phố 6,
              Linh Trung, Thủ Đức, TP.HCM
            </p>
            <p className="text-[11px] text-white/70 uppercase tracking-widest font-medium">
              <span className="text-white font-bold">Email:</span>{" "}
              22521140@gm.uit.edu.vn
            </p>
            <p className="text-[11px] text-white/70 uppercase tracking-widest font-medium">
              <span className="text-white font-bold">SĐT:</span> (+84) 987 654
              321
            </p>
          </div>
        </div>

        {/* CỘT 3: MẠNG XÃ HỘI */}
        <div className="flex md:justify-end gap-6 pt-4 md:pt-0">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-[#FBBF24] hover:-translate-y-1 transition-all duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
