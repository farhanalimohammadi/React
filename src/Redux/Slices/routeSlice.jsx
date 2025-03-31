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
      "analisys/:id": "Account Matrix", // Simplified to just "Account Matrix"
      "shopping/payment": "Start FTMO Challenge / Payment",
      profile: "Profile",
      personalinformation: "Personal Information",
      accountinformation: "Account Information",
      security: "Security",
      identity: "FTMO Identity",
      newsletters: "Newsletters",
      points: "FTMO Points",
      billing: "Billing",
      download : "Download",
      ticket : "Customer Support"
    },
    breadcrumbs: [],
  },
  reducers: {
    setCurrentPath(state, action) {
      const pathArray = action.payload;
      state.currentPath = pathArray;

      state.breadcrumbs = [];
      for (let i = 0; i < pathArray.length; i++) {
        const segment = pathArray[i];
        let displayName;

        // Handle the "analisys" case with an ID
        if (segment === "analisys" && i + 1 < pathArray.length) {
          const id = pathArray[i + 1];
          displayName = `Account Matrix ${id}`;
          const pathUpToIndex = "/" + pathArray.slice(0, i + 2).join("/");
          state.breadcrumbs.push({ name: displayName, path: pathUpToIndex });
          i++; // Skip the next segment (the ID)
        } else {
          // Default case for other segments
          displayName =
            state.routeNames[segment] ||
            segment.charAt(0).toUpperCase() + segment.slice(1);
          const pathUpToIndex = "/" + pathArray.slice(0, i + 1).join("/");
          state.breadcrumbs.push({ name: displayName, path: pathUpToIndex });
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