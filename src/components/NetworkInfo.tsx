import React,{ Fragment, useLayoutEffect, useState } from "react";

export function NetworkInfo() {
  const [ip, setIp] = useState<string>();
  const [countryCode, setCountryCode] = useState<string>();
  const [countryName, setCountryName] = useState<string>();
  const [timeZone, setTimeZone] = useState<string>();

  useLayoutEffect(() => {
    (async () => {
      var request = await fetch("https://freegeoip.app/json/");
      var data = await request.json();
      setIp(data.ip)
      setCountryCode(data.country_code)
      setCountryName(data.country_name)
      setTimeZone(data.time_zone)
    })();
  }, []);

  return (<Fragment>
  
  {ip}
  {countryCode}
  {countryName}
  {timeZone}
  </Fragment>)
}
