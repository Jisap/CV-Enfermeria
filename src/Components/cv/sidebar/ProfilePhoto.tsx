interface ProfilePhotoProps {
  src: string;
  alt: string;
}

export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="relative w-32 h-32 rounded-full border-4 border-medical-500 overflow-hidden bg-medical-50 shadow-[0_15px_20px_-5px_rgba(0,0,0,0.2)] flex justify-center items-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain object-center"
          crossOrigin="anonymous"
        />
      </div>
    </div>
  );
}