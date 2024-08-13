import React, { useState, useEffect } from "react";

const GanadoPremium: React.FC = () => {
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const endDate = new Date("2024-09-13T00:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const diffInMs = endDate.getTime() - currentDate.getTime();

      if (diffInMs > 0) {
        const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 }); 
        clearInterval(interval); 
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000); 
   
    calculateTimeLeft();

    return () => clearInterval(interval); 
  }, [endDate]);

  if (countdown === null) {
    return <div>No disponible aún</div>;
  }

  return (
    <div className="countdown-container">
      <div>Próximamente</div>
      <div>Pagina en construccion</div>
      <div className="countdown-text">
        {countdown.days} {countdown.days === 1 ? "Día" : "Días"}, {countdown.hours.toString().padStart(2, '0')}:{countdown.minutes.toString().padStart(2, '0')}:{countdown.seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default GanadoPremium;
