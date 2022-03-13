import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: "black",
    },
    listItem: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "black",
    },
    todoText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff",
    },
    todoInputArea: {
        backgroundColor: "black",
        flex: 1,
        padding: 10,
        margin: 10,
        position: "absolute",
        borderRadius: 10,
        zIndex: 1,
        top: 500,
        right: 0,
        left: 0,
    },
    todoInput: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 20,
        color: "#000",
        marginBottom: 10,    
    },
    completed: {
        textDecorationLine: "line-through",
    },
    
});