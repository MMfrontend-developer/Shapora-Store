interface PromoBannerProps {
  prefix?: string;
  highlight?: string;
  suffix?: string;
}

export default function PromoBanner({ prefix, highlight, suffix }: PromoBannerProps) {
  return (
    <div className="w-full bg-black text-white text-center py-3 text-sm font-medium">
      🎉 {prefix}{" "}
      {highlight && <span className="text-orange-500 font-bold">{highlight}</span>}{" "}
      {suffix}
    </div>
  );
}
