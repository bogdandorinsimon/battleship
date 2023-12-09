import { useLocation } from "react-router-dom";
import { ROUTER_PATH } from "helpers/constants";
import { useTranslate } from "./useTranslate";

export const usePageTitle = () => {
  const { translate } = useTranslate();
  const { pathname } = useLocation();

  switch (pathname) {
    case ROUTER_PATH.GAME:
      return translate("game.title", "Battleship");

    default:
      return "";
  }
};
