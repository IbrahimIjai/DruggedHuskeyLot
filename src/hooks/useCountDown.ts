import { useEffect, useState } from "react";
import { formatDuration } from "date-fns";

interface TimeFormat {
  formattedTime: string;
}

const useUnixTimeCountDown = (unixTime: number): TimeFormat => {
  const [formattedTime, setFormattedTime] = useState<TimeFormat>({
    formattedTime: "",
  });

  useEffect(() => {
    const unixDate = new Date(unixTime * 1000);
    const differenceInSeconds = Math.floor(
      (Date.now() - unixDate.getTime()) / 1000,
    );
    const formattedDuration = formatDuration({ seconds: differenceInSeconds });

    setFormattedTime({ formattedTime: formattedDuration });
  }, [unixTime]);

  return formattedTime;
};

export default useUnixTimeCountDown;
