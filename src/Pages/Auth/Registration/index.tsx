import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-500 mt-2">
            Join us by filling the information below.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="email@domain.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            Login here.
          </Link>
        </p>
      </div>
    </div>
  );
}
