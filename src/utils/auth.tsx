export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
}
// utils/auth.js

