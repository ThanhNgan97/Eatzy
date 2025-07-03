import React from "react";
import styles from "./Welcome.style";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Welcome = ({ onLoginPress, onSignUpPress }) => {
  return (
    <View style={styles.container}>

      <View style={styles.containerAvatar}>
        <View style={styles.headerSection}>
          <Image
            source={{
              uri: "https://a.pinatafarm.com/956x952/7fd2c04789/peace-sign-hamster.jpeg",
            }}
            style={styles.avatar}
          />
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subtitle}>Eatzy</Text>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={onSignUpPress}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>


      <View style={styles.loginWithSection}>
        <Text style={styles.orText}>or login with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => console.log("Google Login")}>
            <Image
              source={require("../../../assets/images/google.png")} 
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Facebook Login")}>
            <Image
              source={require("../../../assets/images/facebook.png")} 
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};

export default Welcome;
