const Navbar = ({ heading }) => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">{heading}</div>
      </div>
    </div>
  </nav>
);

export default Navbar;
