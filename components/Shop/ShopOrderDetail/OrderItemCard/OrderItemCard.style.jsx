import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DADADA',
    width: '100%',
    maxWidth: 480,
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  quantity: {
    color: '#5ECC7C',
    marginRight: 8,
    minWidth: 24,
    fontFamily:fonts.HelveticaNeueBold
  },

  itemContent: {
    flex: 1,
  },

  itemName: {
    fontSize: 14,
    color: '#3F3F3F',
    fontFamily:fonts.HelveticaNeueBold
  },

  itemNote: {
    fontSize: 13,
    color: '#5ECC7C',
    fontFamily:fonts.HelveticaNeueMediumItalic
  },

  itemPrice: {
    fontSize: 14,
    color: '#3F3F3F',
    marginLeft: 8,
    fontFamily:fonts.HelveticaNeueBold
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 12,
  },

  totalLabel: {
    fontSize: 18,
    color: '#3F3F3F',
    fontFamily:fonts.HelveticaNeueBold

  },

  totalAmount: {
    fontSize: 18,
    color: '#3F3F3F',
    fontFamily:fonts.HelveticaNeueBold
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    gap: 12,
  },

  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelBtn: {
    backgroundColor: '#FDCBCA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },

  cancelText: {
    color: '#A80000',
    fontFamily:fonts.HelveticaNeueBold,
    fontSize:15
  },

  editBtn: {
    backgroundColor: '#68BD6C',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
  },

  editText: {
    color: '#fff',
    fontFamily:fonts.HelveticaNeueBold,
    fontSize:15
  },
});
