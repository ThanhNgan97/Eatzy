import { StyleSheet, ScrollView, View } from "react-native";
import fonts from "../../constants/fonts";
import AvatarWithCamera from "../../components/CustomerProfileEdit/AvatarWithCamera/AvatarWithCamera";
import InfoCard from "../../components/CustomerProfileEdit/InfoCard/InfoCard";
import LogoutButton from "../../components/CustomerProfileEdit/LogoutButton/LogoutButton";

const CustomerProfileEdit = () => {
  const handleLogout = () => {
    console.log("Logout pressed");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <AvatarWithCamera/>
        <InfoCard/>
        <LogoutButton onPress={handleLogout}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  buttonContainer: {
    paddingHorizontal: 16,
  },

  button: {
    marginTop: 16,
    backgroundColor: "#68BD6C",
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.HelveticaNeueBold,
  },
});

export default CustomerProfileEdit;
