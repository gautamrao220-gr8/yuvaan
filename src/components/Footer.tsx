import yuvaanLogo from "@/assets/logo_white.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-space border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <img src={yuvaanLogo} alt="Yuvaan Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#rover" className="hover:text-primary transition-colors">Rover</a>
            <a href="#team" className="hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yuvaan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
