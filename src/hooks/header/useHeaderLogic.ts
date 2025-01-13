import { useLocation } from "react-router-dom";

export const useHeaderLogic = () => {
  const location = useLocation();
  const lcpath = location.pathname;
  let path: string;

  switch (lcpath) {
    case "/":
      path = "Guests";
      break;
    case "/room":
      path = "Room";
      break;
    case "/deal":
      path = "Deal";
      break;
    case "/rate":
      path = "Rate";
      break;
    default:
      path = "Not Found";
      break;
  }

  return { path };
};
