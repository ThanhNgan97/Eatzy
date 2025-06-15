import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import DynamicIcon from "../../shared/Icons/DynamicIcon";
import styles from "./VoucherItem.style";

const { width } = Dimensions.get("window");

const VoucherTermsModal = ({ visible, onClose, validFrom, validTo }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlayTAndCs}>
        <View style={styles.modalContainerTAndCs}>
          <ScrollView contentContainerStyle={styles.modalContentTAndCs}>

            <TouchableOpacity style={styles.backButtonTAndCs} onPress={onClose}>
              <DynamicIcon
                type="Feather"
                name="arrow-left"
                size={24}
                color="#7e7e7e"
              />
            </TouchableOpacity>
            <Text style={styles.headerTAndCs}>Voucher T&Cs</Text>

           
            <View style={styles.voucherCardTAndCs}>
              <Image
                source={require("../../assets/images/Ticker.png")}
                style={styles.voucherImageTAndCs}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.voucherTitleTAndCs}>
                  Shipping Fee up to $5 off
                </Text>
                <Text style={styles.voucherSubtitleTAndCs}>
                  Min. Spend $8
                </Text>

                <View style={styles.progressBarTAndCs}>
                  <View style={styles.progressFillTAndCs} />
                </View>
                <TouchableOpacity>
                  <Text style={styles.tcTextTAndCs}>T&Cs</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.checkIconTAndCs}>
                <DynamicIcon
                  type="MaterialIcons"
                  name="check"
                  size={16}
                  color="#fff"
                />
              </View>
            </View>

            {/* Details Section */}
            <View style={styles.sectionTAndCs}>
              <Text style={styles.sectionTitleTAndCs}>Valid Period</Text>
              <Text style={styles.sectionTextTAndCs}>
                {validFrom} - {validTo}
              </Text>

              <Text style={styles.sectionTitleTAndCs}>Payment</Text>
              <Text style={styles.sectionTextTAndCs}>All payment methods</Text>

              <Text style={styles.sectionTitleTAndCs}>Device</Text>
              <Text style={styles.sectionTextTAndCs}>iOS, Android</Text>

              <Text style={styles.sectionTitleTAndCs}>More Details</Text>
              <Text style={styles.sectionTextTAndCs}>
                Maximum discount ₫500K for orders from $0. Applicable shipping
                units: Express, International, and Express & Self-select.
                Shipping unit: Choice - Express when purchasing from Shopee
                Choice stores.{"\n"}Only applicable to specific users. The number
                of uses is limited, and the program and code may end when the
                offer is fully used or when the offer expires, whichever comes
                first.
              </Text>
            </View>

            {/* OK Button */}
            <TouchableOpacity style={styles.okButtonTAndCs} onPress={onClose}>
              <Text style={styles.okButtonTextTAndCs}>OK</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default VoucherTermsModal;
