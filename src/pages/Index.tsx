const Index = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Portfolio Iframe */}
      <div className="h-full w-full">
        <iframe
          src="/portfolio.html"
          title="Tiago Matias Portfolio"
          className="h-full w-full border-0"
        />
      </div>
    </main>
  );
};

export default Index;
