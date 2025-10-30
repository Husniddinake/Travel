import { useState } from "react";

export default function SignUpPart({ onToggleView }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!agreeToTerms) {
      setError("Please agree to the Terms and Privacy Policies");
      setLoading(false);
      return;
    }

    await new Promise((r) => setTimeout(r, 1000));
    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email, phoneNumber })
    );
    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center px-12 md:px-24 lg:px-32">
        <div className="max-w-md w-full mx-auto">
          <div className="text-3xl font-bold mb-10 text-black">
            g<span className="text-[#8DD3BB]">lobe</span>
          </div>

          <h1 className="text-3xl font-semibold mb-2">Sign up</h1>
          <p className="text-gray-500 mb-8">
            Let's get you all set up so you can access your personal account.
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 000-000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="accent-indigo-600"
              />
              I agree to all the{" "}
              <span className="text-[#FF8682] cursor-pointer">Terms</span> and{" "}
              <span className="text-[#FF8682] cursor-pointer">
                Privacy Policies
              </span>
            </label>

            {/* Error / Success */}
            {error && (
              <div className="text-red-600 text-sm font-medium mt-2">{error}</div>
            )}
            {success && (
              <div className="text-green-600 text-sm font-medium mt-2">
                ✅ Account created successfully!
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-[#8DD3BB] text-white py-2 rounded-lg hover:bg-[#7bc4ab] transition disabled:bg-indigo-400"
            >
              {loading ? "Creating Account..." : "Create account"}
            </button>

            {/* Switch */}
            <div className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onToggleView}
                className="text-[#FF8682] hover:underline"
              >
                Login
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mt-6">
              <div className="border-t w-1/4 border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">Or Sign up with</span>
              <div className="border-t w-1/4 border-gray-300"></div>
            </div>
          </form>
        </div>
      </div>

      {/* Right side image */}
      <div className="hidden md:flex flex-1 items-center justify-center relative bg-gray-100">
        <img
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
          alt="Resort pool view"
          className="w-full h-full object-cover rounded-l-3xl"
        />
        <div className="absolute bottom-4 flex space-x-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
