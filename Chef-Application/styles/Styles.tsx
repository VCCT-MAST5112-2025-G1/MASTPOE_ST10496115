import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff8e1',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f57f17',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#f9a825',
        padding: 12,
        marginTop: 10,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    buttonSecondary: {
        backgroundColor: '#8d6e63',
        padding: 12,
        marginTop: 10,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        padding: 10,
        marginVertical: 4,
        backgroundColor: '#fff3e0',
        borderRadius: 10,
    },
    remove: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default styles;