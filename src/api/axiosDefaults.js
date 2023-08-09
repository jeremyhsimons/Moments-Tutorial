import axios from 'axios'

axios.defaults.baseURL = 'https://drf-tutorial-890382aa2714.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true