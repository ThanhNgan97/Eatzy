import React from "react";
import { View, Image, Dimensions } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import styles from "./DiscountBanner.style";

const banners = [
  require("../../../assets/images/CustomerHome/Discount1.png"),
  require("../../../assets/images/CustomerHome/Discount2.png"),
  require("../../../assets/images/CustomerHome/Discount1.png"),
];

const { width } = Dimensions.get("window");


const Index = () => {
  return (
    <View style={styles.container}>

      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        showPagination
        paginationStyle={{ bottom: 8 }}
        paginationDefaultColor="#ccc"
        paginationActiveColor="#4CAF50"
        paginationStyleItem={{
          width: 6,
          height: 6,
          borderRadius: 3,
          marginHorizontal: 3,
          marginTop: 7
        }}
        data={banners}
        renderItem={({ item }) => (
          <View style={styles.child}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

export default Index;
