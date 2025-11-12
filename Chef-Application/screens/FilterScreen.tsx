import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/Styles';

export default function FilterScreen({ route }: any) {
    const [filter, setFilter] = useState('');
    const [filtered, setFiltered] = useState(route.params.menu);

    const handleFilter = () => {
        const result = route.params.menu.filter((i: any) =>
            i.name.toLowerCase().includes(filter.toLowerCase())
        );
        setFiltered(result);
    };

    const handleRemove = (name: string) => {
        setFiltered(filtered.filter((i: any) => i.name !== name));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filter Menu</Text>

            <TextInput
                placeholder="Type food to search"
                style={styles.input}
                value={filter}
                onChangeText={setFilter}
            />

            <TouchableOpacity style={styles.button} onPress={handleFilter}>
                <Text style={styles.buttonText}>Filter</Text>
            </TouchableOpacity>

            <FlatList
                data={filtered}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.text}>
                            {item.name} - ${item.price.toFixed(2)}
                        </Text>
                        <TouchableOpacity onPress={() => handleRemove(item.name)}>
                            <Text style={styles.remove}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
