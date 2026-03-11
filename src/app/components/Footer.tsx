export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#064E3B] dark:bg-[#000000] text-white py-12 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#FBBF24] rounded flex items-center justify-center text-[#064E3B] text-[10px] font-bold">
                5
              </div>
              <span className="font-bold tracking-tighter">GREENTEAM</span>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Trường Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM
            </p>
          </div>
          <div>
            <span className="font-bold tracking-tighter">Liên Hệ</span>

            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Địa chỉ: Khu phố 6, phường Linh Trung, Thủ Đức, TP Hồ Chí Minh.            </p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Email: 22521140@gm.uit.edu.vn</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              SĐT: (+84)987654321</p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400">
            <a href="#" className="hover:text-[#FBBF24]">
              GITHUB
            </a>
            <a href="#" className="hover:text-[#FBBF24]">
              FACEBOOK
            </a>
            <a href="#" className="hover:text-[#FBBF24]">
              INSTAGRAM
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}
