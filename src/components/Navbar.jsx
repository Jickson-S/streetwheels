export default function Navbar() {
  return (
    <header className="bg-black text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="Street Wheels Cars" className="w-32" />
        <nav className="space-x-4">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}