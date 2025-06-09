import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./CategoryList.style";

const Index = () => {
  return (
    <View style={styles.categoryListContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryListRow}>
          <View style={styles.categoryListSquare}>
            <View style={styles.categoryListColumn}>
              <Text style={styles.categoryListIcon}>🍕</Text>
              <Text style={styles.categoryListText}>Pizza</Text>
            </View>
          </View>

          <View style={styles.categoryListSquare}>
            <View style={styles.categoryListColumn}>
              <Text style={styles.categoryListIcon}>🍝</Text>
              <Text style={styles.categoryListText}>Spaghetti</Text>
            </View>
          </View>

          <View style={styles.categoryListSquare}>
            <View style={styles.categoryListColumn}>
              <Text style={styles.categoryListIcon}>🍔</Text>
              <Text style={styles.categoryListText}>Humbugger</Text>
            </View>
          </View>


          <View style={styles.categoryListSquare}>
            <View style={styles.categoryListColumn}>
              <Text style={styles.categoryListIcon}>🍹</Text>
              <Text style={styles.categoryListText}>Drink</Text>
            </View>
          </View>

          <View style={styles.categoryListSquare}>
            <View style={styles.categoryListColumn}>
              <Text style={styles.categoryListIcon}>🍗</Text>
              <Text style={styles.categoryListText}>Fried Chicken</Text>
            </View>
          </View>

           <View style={styles.categoryListSquare}>
            <View style={styles.categoryListColumn}>
              <Text style={styles.categoryListIcon}>🍦</Text>
              <Text style={styles.categoryListText}>Cream</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
