import { useEffect, useState } from "react";

const useService = user => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://backend-theta-smoky.vercel.app/parlour")
      .then(res => res.json())
      .then(data => setServices(data));
  }, [services]);
  return [services, setServices];
};

export default useService;
