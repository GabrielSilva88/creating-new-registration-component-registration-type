import React, { useState } from "react";
import { Background, SubmitButton, SubmitText, Input } from "./styles";
import Header from "../../components/Header"
import RegisterTypes, { RegisterType } from "../../components/RegisterTypes";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";


export default function New() {
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />

                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <Input 
                        placeholder="Descrição desse registro" 
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />

                    <Input
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <RegisterTypes
                        type={type}
                        sendTypeChanged={(item) => setType(item)}
                    />

                    <SubmitButton>
                        <SubmitText>Resgistrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}