import React, { useState, useEffect, useRef } from "react";

// данные для генерации рейсов
const COUNTRIES_CITIES = [
  ["United States", "New York"], ["United Kingdom", "London"], ["Germany", "Berlin"],
  ["France", "Paris"], ["Spain", "Madrid"], ["Italy", "Rome"], ["Turkey", "Istanbul"],
  ["UAE", "Dubai"], ["Japan", "Tokyo"], ["South Korea", "Seoul"], ["China", "Beijing"],
  ["Australia", "Sydney"], ["Canada", "Toronto"], ["Brazil", "Sao Paulo"],
  ["Mexico", "Mexico City"], ["Russia", "Moscow"], ["India", "Delhi"],
  ["Egypt", "Cairo"], ["Thailand", "Bangkok"], ["Netherlands", "Amsterdam"],
  ["Sweden", "Stockholm"], ["Switzerland", "Zurich"], ["Belgium", "Brussels"], ["Portugal", "Lisbon"],
];

const AIRLINES = [
  "Emirates", "Qatar Airways", "Turkish Airlines", "Lufthansa",
  "British Airways", "Air France", "KLM", "Aeroflot",
  "American Airlines", "Delta", "Etihad", "Singapore Airlines"
];

const STATUSES_RU = ["Регистрация", "Посадка", "По расписанию", "Вылетел", "Задержан"];
const STATUSES_EN = ["Check-in", "Boarding", "On time", "Departed", "Delayed"];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateFlight = (id, lang = "ru") => {
  const from = getRandom(COUNTRIES_CITIES);
  let to = getRandom(COUNTRIES_CITIES);
  while (to[1] === from[1]) to = getRandom(COUNTRIES_CITIES);

  return {
    id,
    flight: `${getRandom(AIRLINES).slice(0, 2).toUpperCase()}${Math.floor(Math.random() * 900 + 100)}`,
    from: `${from[1]}, ${from[0]}`,
    to: `${to[1]}, ${to[0]}`,
    time: `${String(Math.floor(Math.random() * 24)).padStart(2, "0")}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}`,
    airline: getRandom(AIRLINES),
    status: getRandom(lang === "ru" ? STATUSES_RU : STATUSES_EN),
  };
};

const statusColor = (status) => {
  switch (status) {
    case "Вылетел":
    case "Departed":
      return "text-green-500";
    case "Регистрация":
    case "Check-in":
      return "text-blue-400";
    case "Задержан":
    case "Delayed":
      return "text-red-500";
    case "Посадка":
    case "Boarding":
      return "text-yellow-400";
    default:
      return "text-gray-300";
  }
};

const RandomFlightsBoard = () => {
  const [lang, setLang] = useState("ru");
  const [flights, setFlights] = useState(() =>
    Array.from({ length: 10 }, (_, i) => generateFlight(i + 1, "ru"))
  );
  const [time, setTime] = useState(new Date());
  const audioRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlights((prev) => {
        const updated = [...prev];
        const randomIndex = Math.floor(Math.random() * updated.length);
        updated[randomIndex] = generateFlight(randomIndex + 1, lang);

        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }

        return updated;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "ru" ? "en" : "ru"));
    setFlights((prev) =>
      prev.map((f, i) =>
        generateFlight(i + 1, lang === "ru" ? "en" : "ru")
      )
    );
  };

  const labels = {
    ru: {
      title: "Табло рейсов ✈️",
      flight: "Рейс",
      from: "Откуда",
      to: "Куда",
      time: "Время",
      airline: "Авиакомпания",
      status: "Статус",
      refresh: "Обновление каждые 10 секунд 🔄 + звук аэропорта 🎧",
      now: "Текущее время",
      button: "ENG",
    },
    en: {
      title: "Flight Board ✈️",
      flight: "Flight",
      from: "From",
      to: "To",
      time: "Time",
      airline: "Airline",
      status: "Status",
      refresh: "Updates every 10 seconds 🔄 + airport sound 🎧",
      now: "Current time",
      button: "РУС",
    },
  };

  const t = labels[lang];

  return (
    <div className="min-h-screen text-white  flex flex-col items-center p-6 mt-[50px] mb-[-90px]">

      <audio
        ref={audioRef}
        src="/sounds/mixkit-melodic-airport-announcement-ding-1570.wav"
        preload="auto"
      />

      <div className="flex justify-between w-full max-w-6xl items-center mb-4 ">

        <button
          onClick={toggleLang}
          className="bg-[#98FF98] hover:bg-blue-300 text-white px-4 py-2 rounded-xl transition"
        >
          {t.button}
        </button>
      </div>

      <div className="w-full max-w-6xl bg-[#98FF98]/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-900/80 text-gray-300 uppercase text-sm tracking-wider">
              <th className="py-3 px-4 text-left">{t.flight}</th>
              <th className="py-3 px-4 text-left">{t.from}</th>
              <th className="py-3 px-4 text-left">{t.to}</th>
              <th className="py-3 px-4 text-left">{t.time}</th>
              <th className="py-3 px-4 text-left">{t.airline}</th>
              <th className="py-3 px-4 text-left">{t.status}</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, idx) => (
              <tr
                key={flight.id}
                className={`${
                  idx % 2 === 0 ? "bg-gray-800/40" : "bg-gray-700/40"
                } hover:bg-gray-600/40 transition`}
              >
                <td className="py-3 px-4 font-semibold">{flight.flight}</td>
                <td className="py-3 px-4">{flight.from}</td>
                <td className="py-3 px-4">{flight.to}</td>
                <td className="py-3 px-4">{flight.time}</td>
                <td className="py-3 px-4">{flight.airline}</td>
                <td className={`py-3 px-4 font-semibold ${statusColor(flight.status)}`}>
                  {flight.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <p className="text-gray-500 text-xl font-bold mt-1">
        {t.now}: {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default RandomFlightsBoard;
