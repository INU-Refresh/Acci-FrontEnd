import Image from "next/image";

interface AttachedImagesCardProps {
  images?: string[];
}

export function AttachedImagesCard({ images = [] }: AttachedImagesCardProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="bg-white flex flex-col gap-6 p-6 rounded-2xl w-full max-w-[840px] mx-6">
      <div className="flex items-center w-full">
        <p className="text-body3 text-gray-900">첨부 이미지</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image src={imageUrl} alt={`첨부 이미지 ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
