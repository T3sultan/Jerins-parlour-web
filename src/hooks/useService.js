import { useEffect, useState } from "react";

const useService = user => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parlour")
      .then(res => res.json())
      .then(data => setServices(data));
  }, [services]);
  return [services, setServices];
};

export default useService;
