import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import styles from '../styles/Styles';

export default function MenuScreen({ navigation }: any) {
    // ✅ Preload with 5 random meals
    const [menu, setMenu] = useState<{ name: string; price: number }[]>([
        { name: 'Grilled Chicken', price: 120 },
        { name: 'Beef Burger', price: 95 },
        { name: 'Caesar Salad', price: 70 },
        { name: 'Spaghetti Bolognese', price: 110 },
        { name: 'Margherita Pizza', price: 85 },
    ]);

    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');

    const addItem = () => {
        if (!item || !price) {
            Alert.alert('Error', '⚠️ Fill in both fields before pressing the button');
            return;
        }
        setMenu([...menu, { name: item, price: parseFloat(price) }]);
        setItem('');
        setPrice('');
    };

    const removeItem = (name: string) => {
        setMenu(menu.filter((i) => i.name !== name));
    };

    const averagePrice =
        menu.length > 0
            ? (menu.reduce((sum, i) => sum + i.price, 0) / menu.length).toFixed(2)
            : '0.00';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu & Drinks</Text>

            <TextInput
                placeholder="Enter food name"
                style={styles.input}
                value={item}
                onChangeText={setItem}
            />
            <TextInput
                placeholder="Enter price"
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={addItem}>
                <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>

            <FlatList
                data={menu}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.text}>
                            {item.name} - ${item.price.toFixed(2)}
                        </Text>
                        <TouchableOpacity onPress={() => removeItem(item.name)}>
                            <Text style={styles.remove}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Text style={styles.text}>Total Items: {menu.length}</Text>
            <Text style={styles.text}>Average Price: ${averagePrice}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Filter', { menu })}
            >
                <Text style={styles.buttonText}>Go to Filter</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => navigation.navigate('Summary', { menu })}
            >
                <Text style={styles.buttonText}>Summary</Text>
            </TouchableOpacity>
        </View>
    );
}
