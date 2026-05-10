function ScrollingBanner() {
  const text = 'FIRST MONTH FREE - NO CONTRACT - CANCEL ANYTIME - WHATSAPP SUPPORT - OPTIONAL R299 SETUP -';

  return (
    <div className="overflow-hidden border-b border-[#DDE7EF]/50 bg-gradient-to-r from-darknavy via-deepteal to-darknavy py-2 shadow-soft">
      <div className="marquee flex w-[200%] gap-12 whitespace-nowrap text-xs font-black uppercase tracking-widest text-white/90">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ScrollingBanner;
