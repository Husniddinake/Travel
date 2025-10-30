import { useState } from "react";
import { Link } from "react-router-dom";  // Added for navigation to SignUp

export default function LoginPart() {  // Changed to default export, renamed for clarity
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    await new Promise((r) => setTimeout(r, 1000));

    if (email === "test@example.com" && password === "1234") {
      alert("✅ Login successful!");
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify({ email }));
      }
      // Optional: Redirect after success, e.g., useNavigate() from react-router-dom
    } else {
      setError("❌ Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-white flex-col md:flex-row">
      {/* Левая часть */}
      <div className="flex flex-1 items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <div className="text-3xl font-bold mb-10 text-black">
            g<span className="text-[#8DD3BB]">lobe</span>
          </div>

          <h1 className="text-4xl font-bold text-black mb-2">Login</h1>
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            Login to access your Golobe account
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">Email</label>
              <input
                type="email"
                placeholder="john.doe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#8DD3BB]"
              />
            </div>

            {/* Пароль */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#8DD3BB]"
                />
                <button
                  type="button"
                  className="absolute right-3 text-lg cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-[#8DD3BB]"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-[#FF8682] hover:underline font-medium"
              >
                Forgot Password
              </button>
            </div>

            {/* Ошибка */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-3 text-sm text-center">
                {error}
              </div>
            )}

            {/* Кнопка входа */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#8DD3BB] text-black font-semibold rounded-md text-base hover:bg-[#7bc4ab] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            {/* Link to SignUp (replaces toggle) */}
           

            {/* Разделитель */}
            <div className="text-center text-gray-400 text-sm relative my-2">
              <span className="relative z-10 bg-white px-2">Or login with</span>
              <span className="absolute left-0 top-1/2 w-2/5 h-px bg-gray-200"></span>
              <span className="absolute right-0 top-1/2 w-2/5 h-px bg-gray-200"></span>
            </div>
          </form>
        </div>
      </div>

      {/* Правая часть с изображением */}
      <div className="flex-1 relative overflow-hidden hidden md:block">
        <div className="w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
            alt="Resort pool view"
            className="w-full h-full object-cover rounded-l-[24px]"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/50"></span>
          </div>
        </div>
      </div>
    </div>
  );
}