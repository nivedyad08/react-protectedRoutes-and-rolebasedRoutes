import { matchPath } from "react-router-dom";
import routeConfig from "../utils/route-config-main.json";

const saveUserInfo = (data) => {
  localStorage.setItem("value", JSON.stringify(data));
};

const clearUserInfo = (data) => {
  localStorage.removeItem("value");
};

const isLoggedIn = () => {
  try {
    const val = JSON.parse(localStorage.getItem("value"));
    return !!val; //returns true or false
  } catch (error) {
    return false;
  }
};

const getAllowedPath = (pathname) => {
  for (const [path, obj] of Object.entries(routeConfig)) {
    if (matchPath(path, pathname)) {
      return obj.roles;
    }
  }
  return null;
};

const getRoles = () => {
  try {
    const val = JSON.parse(localStorage.getItem("value"));
    const roles = val.role || [];
    return roles;
  } catch (error) {
    return [];
  }
};

const isRouteRoleMatches = (roles) => {
  if (!roles) {
    return true;
  }

  const userRoles = getRoles();
  const filtered = roles.filter((item) => userRoles.includes(item));
  return !!filtered.length;
};
const isPathAllowed = (pathname) => {
  const roles = getAllowedPath(pathname);
  return isRouteRoleMatches(roles);
};

export { saveUserInfo, isLoggedIn, clearUserInfo, isPathAllowed };
