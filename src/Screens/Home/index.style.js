import {StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/theme';
export const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  backcard: {
    backgroundColor: '#8B8B8F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    opacity: 0.7,
  },
  container: {
    flex: 1,
  },
  bottom_view: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderColor: '#1EF1F5',
    backgroundColor: 'rgba(96, 90, 90, 16)',
  },
  flatlist_container: {
    marginTop: 20,
    marginHorizontal: 15,
  },

  nearByData_View: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#707070',
    paddingHorizontal: 18,
    borderRadius: 15,
    backgroundColor: '#BEBEBE',
  },
  modal_container: {
    backgroundColor: 'rgba(220, 220, 204, 0.8)',
    flex: 1,
    opacity: 0.8,
    width: '100%',
    borderTopColor:'#1EF1F5',
    borderBottomColor:'#1EF1F5',
    borderWidth: 1.2,
    marginTop: 20,
   
  },
  modal_Main_container: {
   flex:1,
    margin: 0,
  },
  closebtn: {
    height: 35,
    width: 35,
    backgroundColor: 'rgb(208, 208, 229)',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // position:'absolute',
    // zIndex: 100,
  },
  menuBtn:{
    height: 35,
    width: 35,
    backgroundColor: 'rgb(208, 208, 229)',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position:'absolute',
    zIndex: 100,
  },
  menu_btn: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
  title_btn: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  radiobtn: {
    backgroundColor: 'red',
    height: 100,
  },
  checkingView: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  cardView:{
    height:422,
    borderWidth:2,
    borderColor:COLORS.primary,
    width:'80%',
    alignSelf:'center',
    marginTop:20,
    borderRadius:10
  },
  thankYouView:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:25,
    fontWeight:'700'
  }
});
