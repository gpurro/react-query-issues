import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});

