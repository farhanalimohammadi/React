import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
  name: "route",
  initialState: {
    currentPath: [],
    routeNames: {
      trader: "Trader",
      accountoverview: "Account Overview",
      shopping: "Start FTMO Challenge",
      freeshopping: "Free Trial",
      "analisys/:id": "Account Matrix :id",
      "shopping/payment": "Start FTMO Challenge / Payment",
      profile: "Profile",
      personalinformation : "Personal Information",
      accountinformation : "Account Information",
      security : "Security",
      identity : "FTMO Identity",
      newsletters : "Newsletters",
      points : "FTMO Points",
    },
    breadcrumbs: [], 
  },
  reducers: {
    setCurrentPath(state, action) {
      const pathArray = action.payload;
      state.currentPath = pathArray;

      state.breadcrumbs = pathArray.map((segment, index) => {
        const isDynamicId = segment === "analisys" && pathArray[index + 1];
        const displayName = isDynamicId
          ? `Account Matrix ${pathArray[index + 1]}`
          : state.routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
        
        const pathUpToIndex = "/" + pathArray.slice(0, index + 1).join("/");
        return { name: displayName, path: pathUpToIndex };
      });

      if (state.breadcrumbs.some(b => b.name.includes("Account Matrix"))) {
        const analisysIndex = state.breadcrumbs.findIndex(b => b.name === "analisys");
        if (analisysIndex !== -1) {
          state.breadcrumbs.splice(analisysIndex, 2, state.breadcrumbs[analisysIndex + 1]);
        }
      }
    },
    updateRouteName(state, action) {
      const { key, value } = action.payload;
      state.routeNames[key] = value;
    },
  },
});

export const { setCurrentPath, updateRouteName } = routeSlice.actions;
export default routeSlice.reducer;