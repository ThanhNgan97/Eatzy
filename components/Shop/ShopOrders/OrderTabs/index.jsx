import  { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import styles from './OrderTabs.style';

const OrderTabs = ({ activeTab = 'Order' }) => {
  const [orderCounts, setOrderCounts] = useState({
    order: 0,
    preparing: 2,
    ready: 0,
    shipping: 2,
  });

  
  useEffect(() => {
    const timer = setInterval(() => {
      setOrderCounts(prev => ({
        ...prev,
        preparing: prev.preparing + 1,
      }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { label: 'Order', badge: orderCounts.order },
    { label: 'Preparing', badge: orderCounts.preparing },
    { label: 'Ready', badge: orderCounts.ready },
    { label: 'Shipping', badge: orderCounts.shipping },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = tab.label === activeTab;

        return (
          <View key={index} style={styles.tabItem}>
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
            {tab.badge > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{tab.badge}</Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default OrderTabs;


