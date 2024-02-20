import React, { useContext, useState, useEffect } from "react";
import { Button, Text, View } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";
import { Background, ListBalance } from "./styles";

import api from "../../services/api";
import { format } from "date-fns";

import { useIsFocused } from "@react-navigation/native";

export default function Home() {
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);

    const [dateMovements, setDateMoviments] = useState(new Date());

    useEffect(() => {
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy');

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            });
            if (isActive) {
                setListBalance(balance.data);
            }
        }
        getMovements();

        return () => isActive = false;
    }, [isFocused])

    return (
        <Background>
            <Header title="Minhas Movimentações" />
            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (<BalanceItem data={item} />)}
            />

        </Background>

    )
}

/**
 *  const { signOut, user } = useContext(AuthContext);
 *   <Text>Tela home</Text>
            <Text>Nome: {user.name} </Text>
            <Button
                title="Sair da Conta"
                onPress={() => signOut()}
            />
 * 
 * 
 */