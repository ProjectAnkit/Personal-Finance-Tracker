import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from "axios";

const API_URL = 'http://192.168.1.4:8080/transactions/';

const AddTransactionModal = ({isVisible, onClose, fetchTransactions }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('expense');

    const handleAddTransaction = async () => {

        if (!amount || !category || !type) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const newTransaction = {
                amount: parseFloat(amount),
                category: category.trim(),
                type,
            };


            await axios.post(API_URL, newTransaction);


            if (fetchTransactions) {
                await fetchTransactions();
            }

            onClose();
        } catch (error) {
            console.error('Error adding transaction:', error);
            alert('Failed to add transaction. Please try again.');
        }
    };

    return (
        <Modal visible={isVisible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                    <TextInput
                        placeholder="Amount"
                        style={styles.input}
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                        placeholderTextColor="#A09E9E"
                    />

                    <TextInput
                        placeholder="Category"
                        style={styles.input}
                        value={category}
                        onChangeText={setCategory}
                        placeholderTextColor="#A09E9E"
                    />

                    <View style={styles.typeContainer}>
                        <TouchableOpacity
                            style={[styles.typeButton, type === 'expense' ? styles.selectedTypeButton : null]}
                            onPress={() => setType('expense')}
                        >
                            <Text style={styles.typeButtonText}>Expense</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.typeButton, type === 'income' ? styles.selectedTypeButton : null]}
                            onPress={() => setType('income')}
                        >
                            <Text style={styles.typeButtonText}>Income</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.addButton} onPress={handleAddTransaction}>
                        <Text style={styles.addButtonText}>Add Transaction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 320,
        padding: 25,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 10,
        shadowColor: '#aaa',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#F3F1F1',
        color: '#333',
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    typeButton: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: '#cccbcb',
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selectedTypeButton: {
        backgroundColor: '#333',
    },
    typeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#333',
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 15,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#F44336',
        borderRadius: 25,
        paddingVertical: 12,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddTransactionModal;
