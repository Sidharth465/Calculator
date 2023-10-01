
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {

    const [total, setTotal] = useState("");
    const handleButtonOnPress = (value) => {
        if(value === "C"){
            setTotal("")
        }
        else if(value === "back"){
            setTotal(total.slice(0,-1))
        }
        else if(value === "="){
            try {
                const result = eval(total);
            setTotal(result.toString())
            } catch (error) {
                setTotal("error")
            }

        }
        else if(value === "+"){
            setTotal(total + "+")
        }
        else if(value === "-"){
            setTotal(total + "-")
        }
        else if(value === "*"){
            setTotal(total + "*")
        }
        else if(value === "/"){
            setTotal(total + "/")
        }
        else {
            setTotal(total + value.toString())
        }

    }



    return (
        <SafeAreaView style={styles.main}>
            <View style={{marginBottom:50}}>
                <Text style={{fontSize:50,fontWeight:"bold", color:"#fb7c14"}}>Calculator</Text>
            </View>
            <TextInput style={styles.screen} showSoftInputOnFocus={false} value={total} placeholder='0'></TextInput>

            <View style={styles.button_row}>

                <TouchableOpacity style={styles.yellow_button} onPress={() => { handleButtonOnPress("C") }}>
                    <Text style={styles.button_text}>C</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.back_button} onPress={() => { handleButtonOnPress("back") }}>
                    <Text style={styles.button_text}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.operator_button} onPress={() => { handleButtonOnPress("*") }}>
                    <Text style={styles.button_text}>*</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.button_row}>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("7") }}>
                    <Text style={styles.button_text}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("8") }}>
                    <Text style={styles.button_text}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("9") }}>
                    <Text style={styles.button_text}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.operator_button} onPress={() => { handleButtonOnPress("/") }}>
                    <Text style={styles.button_text}>/</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.button_row}>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("4") }}>
                    <Text style={styles.button_text}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("5") }}>
                    <Text style={styles.button_text}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("6") }}>
                    <Text style={styles.button_text}>6</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.operator_button} onPress={() => { handleButtonOnPress("+") }}>
                    <Text style={styles.button_text}>+</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.button_row}>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("1") }}>
                    <Text style={styles.button_text}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("2") }}>
                    <Text style={styles.button_text}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("3") }}>
                    <Text style={styles.button_text}>3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.operator_button} onPress={() => { handleButtonOnPress("-") }}>
                    <Text style={styles.button_text}>-</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.button_row}>

                <TouchableOpacity style={styles.yellow_button} onPress={() => { handleButtonOnPress(".") }}>
                    <Text style={styles.button_text}>.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.number_button} onPress={() => { handleButtonOnPress("0") }}>
                    <Text style={styles.button_text}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.back_button} onPress={() => { handleButtonOnPress("=") }}>
                    <Text style={styles.button_text}>=</Text>
                </TouchableOpacity>

            </View>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        padding:10,
        flex: 1,
        backgroundColor:"rgba(45,45,45,1)",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 10,
        gap: 10
    },
    screen: {
        
        paddingRight:10,
        borderWidth:1,
        width: "100%",
        height: 150,
        color: "#ffffff",
        textAlign: "right",
        fontSize: 50,
        backgroundColor:"gray"
        ,borderRadius:10,

    }
    ,
    button_row: {
        flexDirection: "row",
        gap: 10,
        width: "98%"
    },
    yellow_button: {
        flex: 1,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#fb7c14",
        justifyContent: "center",
        alignItems: "center"
    },
    button_text: {
        color: "#ffffff",
        fontSize: 35
    },
    back_button: {
        flex: 2,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#CD0089",
        justifyContent: "center",
        alignItems: "center"
    },
    operator_button: {
        flex: 1,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#CD0089",
        justifyContent: "center",
        alignItems: "center",

    },
    number_button: {
        flex: 1,
        height: 80,
        borderRadius: 50,
        backgroundColor: "skyblue",
        justifyContent: "center",
        alignItems: "center"
    },
});
