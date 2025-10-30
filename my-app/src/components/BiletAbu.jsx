import React, { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";



const ACCENT = "#7EC7B3";

const AIRLINES = [
  "Emirates","Qatar Airways","Turkish Airlines","Lufthansa","British Airways",
  "Delta","United","Air France","KLM","Singapore Airlines","Cathay Pacific",
  "Etihad","FlyDubai","Air India","ANA","Japan Airlines","Korean Air",
  "AeroMexico","LATAM","Qantas",
];

const LOGOS = {
  "Emirates": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png",
  "Qatar Airways": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png",
  "Turkish Airlines": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Turkish_Airlines_logo_2019_compact.svg/1024px-Turkish_Airlines_logo_2019_compact.svg.png",
  "Lufthansa": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/2560px-Lufthansa_Logo_2018.svg.png",
  "British Airways": "https://upload.wikimedia.org/wikipedia/sco/thumb/4/42/British_Airways_Logo.svg/1280px-British_Airways_Logo.svg.png",
  "Delta": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/2560px-Delta_logo.svg.png",
  "United": "https://www.logo.wine/a/logo/United_Airlines/United_Airlines-Logo.wine.svg",
  "Air France": "https://cdn.worldvectorlogo.com/logos/air-france-11.svg",
  "KLM": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/2560px-KLM_logo.svg.png",
  "Singapore Airlines": "https://1000logos.net/wp-content/uploads/2020/04/Singapore-Airlines-Logo.png",
  "Cathay Pacific": "https://cdn.worldvectorlogo.com/logos/cathay-pacific-logo-2.svg",
  "Etihad": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Etihad-airways-logo.svg/2560px-Etihad-airways-logo.svg.png",
  "FlyDubai": "https://1000logos.net/wp-content/uploads/2020/04/FlyDubai-Logo.png",
  "Air India": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Air_India_2023.svg/2560px-Air_India_2023.svg.png",
  "ANA": "https://1000logos.net/wp-content/uploads/2021/04/All-Nippon-Airways-logo.png",
  "Japan Airlines": "https://logos-world.net/wp-content/uploads/2023/01/Japan-Airlines-Logo.png",
  "Korean Air": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/KoreanAir_logo.svg/2560px-KoreanAir_logo.svg.png",
  "AeroMexico": "https://1000logos.net/wp-content/uploads/2023/05/Aeromexico-Logo-2000.png",
  "LATAM": "https://s.latamairlines.com/images/seo/logo-latam-airlines.png",
  "Qantas": "https://1000logos.net/wp-content/uploads/2017/05/Qantas-Logo.png",
};

const COUNTRIES_CITIES = [
  ["United States", "New York"],["United Kingdom", "London"],["Germany", "Berlin"],
  ["France", "Paris"],["Spain", "Madrid"],["Italy", "Rome"],["Turkey", "Istanbul"],
  ["UAE", "Dubai"],["Japan", "Tokyo"],["South Korea", "Seoul"],["China", "Beijing"],
  ["Australia", "Sydney"],["Canada", "Toronto"],["Brazil", "Sao Paulo"],
  ["Mexico", "Mexico City"],["South Africa", "Johannesburg"],["Russia", "Moscow"],
  ["India", "Delhi"],["Egypt", "Cairo"],["Thailand", "Bangkok"],
  ["Netherlands", "Amsterdam"],["Sweden", "Stockholm"],["Switzerland", "Zurich"],
  ["Belgium", "Brussels"],["Portugal", "Lisbon"],
];

const FLAG_MAP = {
  'United States': '🇺🇸','United Kingdom': '🇬🇧','Germany': '🇩🇪','France': '🇫🇷',
  'Spain': '🇪🇸','Italy': '🇮🇹','Turkey': '🇹🇷','UAE': '🇦🇪','Japan': '🇯🇵',
  'South Korea': '🇰🇷','China': '🇨🇳','Australia': '🇦🇺','Canada': '🇨🇦','Brazil': '🇧🇷',
  'Mexico': '🇲🇽','South Africa': '🇿🇦','Russia': '🇷🇺','India': '🇮🇳','Egypt': '🇪🇬',
  'Thailand': '🇹🇭','Netherlands': '🇳🇱','Sweden': '🇸🇪','Switzerland': '🇨🇭','Belgium': '🇧🇪','Portugal': '🇵🇹',
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pad(n) { return String(n).padStart(2, '0'); }
function pick(arr) { return arr[randomInt(0, arr.length - 1)]; }
function pickWeighted(arr, weights) {
  const sum = weights.reduce((a,b)=>a+b,0);
  let r = Math.random()*sum;
  for (let i=0;i<arr.length;i++){
    if (r < weights[i]) return arr[i];
    r -= weights[i];
  }
  return arr[arr.length-1];
}

function generateOne(id, origin = 'Tashkent (TAS)') {
  const [destCountry, destCity] = COUNTRIES_CITIES[randomInt(0, COUNTRIES_CITIES.length - 1)];
  const airline = AIRLINES[randomInt(0, AIRLINES.length - 1)];
  const flightNo = `${airline.split(' ')[0].slice(0,2).toUpperCase()}${randomInt(100,999)}`;

  const now = new Date();
  const depart = new Date(now.getTime() + randomInt(1, 120) * 24 * 60 * 60 * 1000);
  depart.setHours(randomInt(0,23), pick([0,15,30,45]));
  const durationH = randomInt(2, 14);
  const durationM = pick([0,15,30,45]);
  const arrival = new Date(depart.getTime() + durationH * 3600 * 1000 + durationM * 60 * 1000);
  const stops = pickWeighted([0,1,2],[0.7,0.25,0.05]);
  const base = randomInt(80, 2200);
  const price = Math.round(base * (1 + stops * 0.12) * (1 + (durationH - 2) * 0.02));
  const seatClass = pickWeighted(['Economy','Premium Economy','Business','First'], [0.7,0.15,0.12,0.03]);

  return {
    id,
    airline,
    flight_number: flightNo,
    origin,
    destination_country: destCountry,
    destination_city: destCity,
    depart_date: depart.toISOString().slice(0,10),
    depart_time: `${pad(depart.getHours())}:${pad(depart.getMinutes())}`,
    arrival_date: arrival.toISOString().slice(0,10),
    arrival_time: `${pad(arrival.getHours())}:${pad(arrival.getMinutes())}`,
    duration: `${durationH}h ${durationM}m`,
    stops,
    price_usd: price,
    currency: 'USD',
    seat_class: seatClass,
    booking_url: `https://example.com/book/${flightNo.toLowerCase()}/${id}`,
  };
}

export default function MockFlightsFull() {
  const data = useMemo(() => {
    const out = [];
    for (let i=1;i<=50;i++) out.push(generateOne(i));
    return out;
  }, []);

  // UI + filters state
  const [query, setQuery] = useState("");
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  // priceRange[0] = min (fixed to dataset min), priceRange[1] = selected max
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [openSection, setOpenSection] = useState({ price: true, airlines: false });

  const toggleAirline = (a) => {
    setSelectedAirlines(prev => prev.includes(a) ? prev.filter(x=>x!==a) : [...prev, a]);
  };
  const toggleSection = (k) => setOpenSection(prev => ({...prev, [k]: !prev[k]}));

  const prices = data.map(d => d.price_usd);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // ensure initial priceRange lower bound uses dataset min
  React.useEffect(() => {
    setPriceRange([minPrice, Math.min(maxPrice, priceRange[1] || maxPrice)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice]);

  // filter logic
  const filtered = data.filter(item => {
    if (item.price_usd < priceRange[0] || item.price_usd > priceRange[1]) return false;
    if (selectedAirlines.length && !selectedAirlines.includes(item.airline)) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      const hay = `${item.destination_city} ${item.destination_country} ${item.airline} ${item.origin} ${item.flight_number}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="flex bg-gray-50 min-h-screen p-6 gap-6">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white rounded-2xl shadow p-4 flex flex-col gap-3">
        <h2 className="font-semibold text-lg px-2">Filters</h2>

        {/* Price */}
        <div className="border-b pb-2">
          <button
            onClick={() => toggleSection("price")}
            className="w-full flex justify-between items-center font-medium text-sm px-2"
          >
            <span>Price</span>
            <ChevronDownIcon
              className={`w-5 h-5 transform transition-transform duration-200 ${openSection.price ? "rotate-180" : "rotate-0"}`}
              style={{ color: ACCENT }}
            />
          </button>

          <div className={`overflow-hidden transition-all duration-300 px-2 ${openSection.price ? "max-h-40 mt-3" : "max-h-0"}`}>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([minPrice, Number(e.target.value)])}
              className="w-full"
              style={{ accentColor: ACCENT }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => {
                  const v = Number(e.target.value || minPrice);
                  setPriceRange([Math.max(minPrice, Math.min(v, priceRange[1])), priceRange[1]]);
                }}
                className="w-20 p-1 border rounded text-sm"
              />
              <span className="text-xs text-gray-400">—</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => {
                  const v = Number(e.target.value || maxPrice);
                  setPriceRange([priceRange[0], Math.min(maxPrice, Math.max(v, priceRange[0]))]);
                }}
                className="w-24 p-1 border rounded text-sm"
              />
            </div>
          </div>
        </div>

        {/* Airlines */}
        <div className="border-b pb-2">
          <button
            onClick={() => toggleSection("airlines")}
            className="w-full flex justify-between items-center font-medium text-sm px-2"
          >
            <span>Airlines</span>
            <ChevronDownIcon
              className={`w-5 h-5 transform transition-transform duration-200 ${openSection.airlines ? "rotate-180" : "rotate-0"}`}
              style={{ color: ACCENT }}
            />
          </button>

          <div className={`overflow-hidden transition-all duration-300 px-2 ${openSection.airlines ? "max-h-56 mt-3" : "max-h-0"}`}>
            <div className="flex flex-col gap-2 max-h-52 overflow-auto pr-1">
              {AIRLINES.map(a => (
                <label key={a} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedAirlines.includes(a)}
                    onChange={() => toggleAirline(a)}
                    className="h-4 w-4 rounded"
                  />
                  <span className="truncate">{a}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto text-xs text-gray-500 px-2">Showing <strong>{filtered.length}</strong> of {data.length} tickets</div>
      </aside>

      {/* MAIN LIST */}
      <main className="flex-1">
        <div className="flex flex-col gap-5">
          {/* search / quick controls */}
          <div className="flex items-center gap-4 mb-2">
            <input
              placeholder="Search city, airline, flight..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-72 p-2 border rounded text-sm"
            />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="px-2 py-1 text-xs border rounded" style={{ borderColor: "#e6efeB" }}>Tashkent → Anywhere</span>
              <span className="px-2 py-1 text-xs border rounded" style={{ borderColor: "#e6efeB" }}>Economy</span>
            </div>
          </div>

          {filtered.map(item => (
            <article key={item.id} className="w-full bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-colors duration-200">
              {/* top row */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-20 h-12 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                    {LOGOS[item.airline] ? (
                      <img src={LOGOS[item.airline]} alt={item.airline} className="max-h-10 object-contain" />
                    ) : (
                      <div className="text-lg font-bold">{item.airline.slice(0,2)}</div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-sm truncate">
                      {item.destination_city}, {item.destination_country} <span className="ml-1">{FLAG_MAP[item.destination_country] || ""}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 truncate">{item.airline} • {item.flight_number}</div>

                    <div className="flex items-center gap-2 text-xs mt-2">
                      <span className="px-2 py-0.5 text-xs rounded" style={{ border: "1px solid #E8F6F1", color: "#2d6a4f" }}>4.2</span>
                      <span className="text-xs font-medium">Very Good</span>
                      <span className="text-xs text-gray-400">54 reviews</span>
                    </div>
                  </div>
                </div>

                <div className="text-right min-w-[120px]">
                  <div className="text-xs text-gray-400">starting from</div>
                  <div className="text-xl font-bold" style={{ color: "#E11D48" }}>${item.price_usd}</div>
                </div>
              </div>

              {/* flight times (compact list) */}
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                {[1,2].map((_, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4" />
                      <div className="flex flex-col leading-tight">
                        <span className="font-medium">{item.depart_time} — {item.arrival_time}</span>
                        <span className="text-xs text-gray-500">{item.depart_date}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{item.stops === 0 ? "non stop" : `${item.stops} stop${item.stops > 1 ? "s" : ""}`}</div>
                    <div className="text-sm font-medium text-gray-700">{item.duration}</div>
                  </div>
                ))}
              </div>

              {/* bottom row: button */}
              <div className="mt-4">
                <Link to="/Shahrizoda">
                <a
                  href={item.booking_url}
                  className="block w-full text-center py-3 rounded-lg text-white font-medium transition"
                  style={{ background: ACCENT }}
                  rel="noreferrer"
                >
                  Забронировать
                </a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
