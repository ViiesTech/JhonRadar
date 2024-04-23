import {
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomText from "../../Components/Text";

const Settings = ({ navigation }) => {

    // const toggleModalSettings = () => {
    //     setSettingsModalVisible(!isSettingsModalVisible);
    //     setModalVisible(false);
    //   };
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <CustomText
                    text={"Settings"}
                    style={{
                        marginHorizontal: 20,
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 18,
                    }}
                />
                <TouchableOpacity
                    style={styles.closebtn}
                    // onPress={() => {
                    //     toggleModalSettings();
                    // }}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name={"close"} size={30} color={"#fff"} style={{}} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: "#1EF1F5",
                    height: 1.5,
                    marginTop: 20,
                }}
            />
            <ScrollView style={{ top: 5 }}>
                <View
                    style={{
                        backgroundColor: "#CFCFCF",
                        marginHorizontal: 20,
                        marginTop: 20,
                        borderRadius: 10,
                    }}
                >
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"General"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Map Display"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Voice and Sound"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                </View>
                <CustomText
                    text={"Driving preference"}
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginHorizontal: 20,
                        marginTop: 10,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "#CFCFCF",
                        marginHorizontal: 20,
                        marginTop: 20,
                        borderRadius: 10,
                    }}
                >
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Navigation"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Vehicle Details"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText
                            text={"Alert and reports"}
                            style={styles.title_btn}
                        />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Gas stations"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Speedometer"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Audio player"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                </View>
                <CustomText
                    text={"Notifications"}
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginHorizontal: 20,
                        marginTop: 10,
                    }}
                />
                <View
                    style={{
                        backgroundColor: "#CFCFCF",
                        marginHorizontal: 20,
                        marginTop: 20,
                        borderRadius: 10,
                        bottom: 15,
                    }}
                >
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Notifications"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Planned drives"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu_btn}>
                        <CustomText text={"Reminders"} style={styles.title_btn} />
                        <Entypo
                            name={"chevron-small-right"}
                            size={30}
                            color={"#fff"}
                            style={{}}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1,
        opacity: 0.8,
        width: "100%",
        borderTopColor: "#1EF1F5",
        borderBottomColor: "#1EF1F5",
        borderWidth: 1.2,
        marginTop: 20,
    }
})