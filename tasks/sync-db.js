let times = 0;

const syncDB = () => {
    times++
    console.log('Tick cada 5 segundos: ', times);
    return times;
}

module.exports = {
    syncDB
}