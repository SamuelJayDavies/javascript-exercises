const getTheTitles = function(books) {
    let titleArr = [];
    for(key in books) {
        titleArr.push(books[key].title);
    }
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
