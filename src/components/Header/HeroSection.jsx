import WaveGrid from "./WaveGrid";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a051c] to-[#1a103c] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[100px] font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent hover:animate-shake">
            Let&apos;s Code
            <br />
            Your Career!
          </h1>

          <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 mt-8">
            <div className="flex flex-col gap-2 text-white">
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Registration End</span>
                <span>10th Jun, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Enrollment Start</span>
                <span>24th Jun, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveGrid />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
        <div className="text-sm uppercase tracking-wider mb-2">SCROLL</div>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
          <div className="w-1 h-2 bg-white rounded-full mx-auto mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
