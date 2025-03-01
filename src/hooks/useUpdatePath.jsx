import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPath } from "../Redux/Slices/routeSlice";

export default function useUpdatePath() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathArray = location.pathname.split("/").filter(Boolean);
    dispatch(setCurrentPath(pathArray));
  }, [location, dispatch]);
}