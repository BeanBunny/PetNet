import React, { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { View } from "react-native";
import { Headline } from "react-native-paper";
import Button from "../../components/Button";
import restApi from "../../api/restApi";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(async () => {
    const resp = await restApi.get("/petowner/profile");
    console.log(resp.data);
    setProfile(resp.data);
  }, []);

  return (
    <View>
      <Headline>AccountScreen</Headline>
      <Button text="Logout" onChange={() => signout()} />
      <Button
        text="Edit Profile"
        onChange={() => navigation.navigate("EditProfile", { profile })}
        style={{ margin: "2%", flex: 0.5, height: "50%" }}
      />
    </View>
  );
};

export default AccountScreen;
