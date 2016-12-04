function generateHashtag (str) {
    var nstr = '#'+str.split(' ').map((x)=>x.slice(0,1).toUpperCase()+x.slice(1)).join('');
    return str == '' || nstr.length > 140 ? false : nstr;
}

