import React from "react";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";


export default function Start(){
    return(
        <View style = {styles.container }>
            <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center"}}>
                    <Image 
                        source={require("../../assets/icons/logo3.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.description}>
                        Vamos transformar sua vida {"\n"} em um jogo, buscando sempre  {"\n"} {" "} o melhor nivel.
                    </Text>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description: {
        color: "#ffffff",
        fontsize: 20,
        textAlign: "center",
        marginVertical: 60,
    },
})