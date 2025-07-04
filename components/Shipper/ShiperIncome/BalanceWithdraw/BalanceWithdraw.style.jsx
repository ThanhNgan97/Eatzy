import { StyleSheet, Platform } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#68BD6C",
    borderRadius: 16,
    padding: Platform.OS === "ios" ? 12 : 10,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  balanceText: {
    color: "white",
    fontSize: Platform.OS === "ios" ? 14 : 13,
    flex: 1,
    fontFamily: fonts.HelveticaNeueMedium,
  },

  withdrawButton: {
    backgroundColor: "#fff",
    paddingVertical: Platform.OS === "ios" ? 4 : 2,
    paddingHorizontal: 12,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
      },
      android: {
        elevation: 1,
      },
    }),
  },

  withdrawButtonText: {
    color: "#68BD6C",
    fontFamily: fonts.HelveticaNeueBold,
    fontSize: Platform.OS === "ios" ? 14 : 13,
  },

  row: {
    flexDirection: "row",
    columnGap: 6, 
    alignItems: "center",
  },
});

export default styles
