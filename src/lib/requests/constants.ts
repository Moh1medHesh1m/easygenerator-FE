import axios from 'axios';

import { config } from '../../utils/config';

export const apiClient = axios.create({ baseURL : config.api ?? "https://easygenerator-be-qmmr.onrender.com/api" });
