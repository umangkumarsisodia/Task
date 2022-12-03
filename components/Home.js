import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useCallback } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Button, RadioButton } from "react-native-paper";

const Home = () => {
  const [mob, setMob] = useState("");
  const [amount, setAmount] = useState("");
  const [benefOpen, setBenefOpen] = useState(false);
  const [benefValue, setBenefValue] = useState(null);
  const [benef, setBenef] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ]);

  const [checked, setChecked] = useState("first");

  const [modalVisible, setModalVisible] = useState(false);

  const onBenefOpen = useCallback(() => {
    setBenefOpen(true);
  }, []);

  const formSubmitHandler = () => {
    if(mob && checked && benefValue && amount) {
        setModalVisible(true);
    }
    else {
        alert("Please fill all the details.")
    }
  }

  const onModalChangeHandler = () => {
    setModalVisible(false);
    setMob("")
    setAmount("");
    setBenefValue(null);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#06283D",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={onModalChangeHandler}>
                <Text style={{color:"white"}}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalText}>Fund transferred successfully!</Text>
          </View>
        </View>
      </Modal>
      <TextInput
        placeholder="Sender Mobile Number"
        keyboardType="numeric"
        style={styles.formStyle}
        onChangeText={(m) => setMob(m)}
      />
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        style={styles.formStyle}
        onChangeText={(amt) => setAmount(amt)}
      />
      <View>
        <DropDownPicker
          style={styles.formStyle}
          open={benefOpen}
          value={benefValue}
          items={benef}
          setOpen={setBenefOpen}
          setValue={setBenefValue}
          setItems={setBenef}
          placeholder="Choose benificiary"
          placeholderStyle={styles.placeholderStyles}
          onOpen={onBenefOpen}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
      <View
        style={{
          borderWidth: 2,
          borderColor: "white",
          width: "80%",
          borderRadius: 10,
          marginVertical: 10,
          backgroundColor: "#c8c8c8",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={{ color: "grey" }}>NEFT</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={{ color: "grey" }}>RTGS</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#256D85",
          marginLeft: 20,
          width: "50%",
          height: 50,
          backgroundColor: "#256D85",
          borderRadius: 10,
          justifyContent: "center",
          marginVertical: 10,
        }}
        onPress={formSubmitHandler}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Transfer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formStyle: {
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    paddingVertical: 10,
    width: "80%",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#c8c8c8",
    marginVertical: 10,
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  placeholderStyles: {
    color: "grey",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#CF0A0A",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:"white"
  }
});

export default Home;
