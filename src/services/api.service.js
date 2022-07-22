// import axios from 'axios';
import { utilService } from './util.service';

export const apiService = {
    getMarketData
};

async function getMarketData() {
    try {
        return await makeData();
    } catch (e) {
        console.error(e);
    }
}

function makeData() {
    const data = []
    for (let i = 0; i < 100; i++) {
        const x = utilService.getRandomInt(i, 100)
        const y = utilService.getRandomInt(i, 60)
        const r = utilService.getRandomInt(0, 10)
        const bubble = { x, y, r }
        data.push(bubble)
    }
    return Promise.resolve(data)
}