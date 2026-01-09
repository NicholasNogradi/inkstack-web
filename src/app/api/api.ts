import { get } from "http";

export class API {
    async getBooks() {
        const baseURL = 'http://localhost:3000/api/books';

        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            return data;
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }
}