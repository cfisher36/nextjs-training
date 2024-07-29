import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <Link className="text-white" href="/aboutme">
                About Me
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/fetch">
                API
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
