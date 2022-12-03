import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

const Dashboard = ({navigation}) => {
  return (
    <View style={style.main}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#256D85",
              width: 100,
              height: 50,
              borderRadius: 10,
              backgroundColor: "#256D85",
              justifyContent: "center"
            }}
            onPress = {() => navigation.navigate("Home")}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Money</Text>
            <Text style={{ color: "white", textAlign: "center" }}>
              Transfer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#256D85",
              marginLeft: 20,
              width: 100,
              height: 50,
              backgroundColor: "#256D85",
              borderRadius: 10,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Book Air
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#256D85",
              width: 100,
              height: 50,
              backgroundColor: "#256D85",
              borderRadius: 10,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Book Train
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#256D85",
              marginLeft: 20,
              width: 100,
              height: 50,
              backgroundColor: "#256D85",
              borderRadius: 10,
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Mini ATM
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#06283D"
  },
});

export default Dashboard;
