import {Image, Text, View} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";

const Boat = ({name, description, picture, icon_name, icon_colour}) => {
    return (
        <View>
            <Text>
                <FontAwesome6 name={icon_name} size={40} color={icon_colour} /> {name}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={picture} style={{width:400, height:500}}/>
        </View>
    );
}


export default Boat