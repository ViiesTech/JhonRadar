import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/Home';
import MenuModal from '../Components/Modal/MenuModal';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator

            drawerContent={(props) => <MenuModal {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: 'transparent',
                    width:'100%',
                }, headerShown: false,
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}

export default MyDrawer