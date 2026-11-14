import Image from "next/image";
import type { Dictionary } from "@/data/dictionary";

type TopbarProps = {
  copy: Dictionary;
};

export const Topbar = ({ copy }: TopbarProps): React.JSX.Element => {
  return (
    <header className="topbar">
      <div className="brand">
        <Image
          src="/brand-logo.png"
          alt={copy.brandAlt}
          width={62}
          height={62}
          sizes="(max-width: 640px) 44px, 62px"
          priority
        />
        <span>{copy.brandName}</span>
      </div>
      <div className="topnote">{copy.topNote}</div>
    </header>
  );
};
