import { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-sm text-white/60 text-center">
          © {currentYear} Axiom Accord. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
