import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Styles';

export default function SummaryScreen({ route }: any) {
    const menu = route.params.menu || [];
    const totalItems = menu.length;
    const averagePrice =
        totalItems > 0
            ? (menu.reduce((sum: number, i: any) => sum + i.price, 0) / totalItems).toFixed(2)
            : '0.00';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.text}>Number of Items: {totalItems}</Text>
            <Text style={styles.text}>Average Price: ${averagePrice}</Text>
        </View>
    );
}
