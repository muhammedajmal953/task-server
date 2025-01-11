const axios  = require("axios")

const globalEmail = 'ajmal@gmail.com'
const globalPassword = '85967389'

 function login(email,passWord) {
    try {
        if (!email||!passWord) {
            return { message:'Must have the Credentials'}
        }
        if (email !== globalEmail || passWord !== globalPassword) {
            return { message:'invalid credentials'}
        }

        return { success: true, message:'Login Successfully'}
    } catch (error) {
        return {message:'Internal server error'}
    }
}
async function countryNames(searchQuery, page) {
    try {
        const axiosInstance = axios.create({
            timeout: 10000,
        })
        const response = await axiosInstance.get('https://restcountries.com/v3.1/all');
        let countries = response.data; // Access the response data

        if (!countries || countries.length === 0) {
            return { message: 'No countries available' };
        }

        // Filter based on the search query
        if (searchQuery && searchQuery.length > 0) {
            countries = countries.filter(country =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Pagination logic
        const itemsPerPage = 5;
        const skip = (page - 1) * itemsPerPage;
        const paginatedCountries = countries.slice(skip, skip + itemsPerPage);

        return {
            success: true,
            message: 'Countries fetched successfully',
            data: paginatedCountries,
        };

    } catch (error) {
        console.error('Error fetching countries:', error.message);

        return {
            message: 'Internal server error',
            error: error.message,
        };
    }
}

module.exports={login,countryNames}