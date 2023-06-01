const fetch_function = async (setFootballData) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setFootballData(data);
};

module.exports.fetch_function = fetch_function;
