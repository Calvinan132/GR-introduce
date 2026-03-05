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
              Software Project Management 2024
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400">
            <a href="#" className="hover:text-[#FBBF24]">
              GITHUB
            </a>
            <a href="#" className="hover:text-[#FBBF24]">
              JIRA
            </a>
            <a href="#" className="hover:text-[#FBBF24]">
              DOCUMENTATION
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
