let beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function (item) {
    return item === 'Godzilla';
});

beasts.find(function (item) {
    return item === 'Godzilla';
});

beasts.includes('Godzilla');

// We can't use linear search to index Google or to find a friend from a list 
// on Facebook. 
// There are definitely better ways to do this.

// Binary search seems like a more efficient way of searching for friends or in 
// list of random integers. By using a midpoint and searching everything on 
// greater or less than the midpoint. Also we can call it a pivot depending on 
// the implementation as well.

/**
 * In Binary search, you split the list and keep looking for the value.
 * You understand that left is less than right node and keep stepping down
 * Till you find the element of the value you want to find.
 */