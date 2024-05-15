import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"6760b92006803c1135761d5f209362c6",
        language:"ko-KR"
    }
});


// API 읽기 액세스 토큰 eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYwYjkyMDA2ODAzYzExMzU3NjFkNWYyMDkzNjJjNiIsInN1YiI6IjY2M2YyYzcwMTk2ZWRjOTg3NjI1ZTE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J5tQJzaymlZmHKPYs0KNk4tYNeLWFKFF6SbeEG7zHSo

export default instance;