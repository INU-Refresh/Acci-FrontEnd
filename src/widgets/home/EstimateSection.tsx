export function EstimateSection() {
  return (
    <section className="container mx-auto px-4 sm:px-10 py-8 sm:py-20 max-w-7xl">
      <div className="text-center mb-6">
        <h2 className="text-title4 sm:text-title2 mb-2 text-gray-900">Acci와 알아보는 수리비 견적</h2>
        <p className="text-body8 sm:text-body4 text-gray-500">Acci는 파손 부위 또는 사진을 통해 예상 수리비 견적을 제공합니다</p>
      </div>
      <div className="rounded-lg aspect-video overflow-hidden min-h-36 sm:max-h-90 mx-auto">
        <video
          src="/videos/estimate-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
