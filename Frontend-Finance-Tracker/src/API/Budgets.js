import axios from 'axios';

const API_URL = 'http://192.168.1.4:8080';


export const fetchBudgets = async () => {
    try {
        const response = await axios.get(`${API_URL}/budgets/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching budgets:", error);
        throw error;
    }
};

export const fetchBudgetFulfillmentPercentage = async (category) => {
    try {
        const response = await axios.get(`${API_URL}/budgets/percentage/${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching budget fulfillment percentage for category ${category}:`, error);
        throw error;
    }
};

export const deleteBudget = async (category) => {
    try {
        await axios.delete(`${API_URL}/budgets/${category}`);
    } catch (error) {
        console.error("Error fetching budgets:", error);
        throw error;
    }
};

export const addBudget = async (amount, category) => {
    try {
        await axios.post(`${API_URL}/budgets/`, { budgetPrice: amount, category });
    } catch (error) {
        console.error("Error adding budget:", error);
        throw error;
    }
};

