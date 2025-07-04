import { StyleSheet } from "react-native";
import fonts from "../../../../constants/fonts";

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingHorizontal: 20,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 16,
    marginHorizontal: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  statValue: {
    fontSize: 18,
    fontFamily: fonts.HelveticaNeueBold,
    color: "#222222",
  },

  statLabel: {
    fontSize: 12,
    fontFamily: fonts.HelveticaNeueMedium,
    color: "#7e7e7e",
  },
});

export default styles;
