"use client";

import React, { useState, useEffect } from "react";

const Greeting: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Good afternoon");
    } else if (currentHour >= 17 && currentHour < 20) {
      setGreeting("Good evening");
    } else {
      setGreeting("Good night");
    }
  }, []);

  return (
    <div className="mb-2">
      <h1 className="text-white text-3xl font-semibold">{greeting}</h1>
    </div>
  );
};

export default Greeting;
