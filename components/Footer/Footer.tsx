import type { Dictionary } from "@/data/dictionary";

type FooterProps = {
  copy: Dictionary;
};

export const Footer = ({ copy }: FooterProps): React.JSX.Element => {
  return (
    <footer className="footer">
      {copy.footer}{" "}
      <a href="https://coutohomes.com/" rel="noopener noreferrer">
        {copy.footerLink}
      </a>
    </footer>
  );
};
