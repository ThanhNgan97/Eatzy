import { View } from 'react-native';
import OrderCard from './index';

const orderList = [
  {
    name: 'Thanh Ngan',
    code: 'FD-103',
    items: 1,
    type: 'New customer',
  },
  {
    name: 'Hai Dang',
    code: 'FD-223',
    items: 3,
    type: 'Loyal customer',
  },
];

const OrderData = () => {
  return (
    <View>
      {orderList.map((item, index) => (
        <OrderCard
          key={index}
          name={item.name}
          code={item.code}
          items={item.items}
          type={item.type}
          avatarUrl={require('../../../../assets/images/avatar.png')} 
        />
      ))}
    </View>
  );
};

export default OrderData;
