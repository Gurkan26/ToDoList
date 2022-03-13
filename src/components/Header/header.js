import React from "react";
import {View,Text} from "react-native";
import styles from "./Header.styles";

const header =(props)=>{
    const filteredTodos=props.item.filter(todo=>todo.completed);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Yapılacaklar
            </Text>
            <Text style={styles.counter}>
                {filteredTodos.length}
            </Text>
        </View>
    );
}
export default header;