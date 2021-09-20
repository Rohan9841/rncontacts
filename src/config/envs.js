import { DEV_BACKEND_URL, PROD_BACKEND_URL } from '@env';

const devEnvironmentVariables = {
    "backendUrl": DEV_BACKEND_URL
}

const prodEnvironmentVariables = {
    "backendUrl": PROD_BACKEND_URL
}

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;