// Initialize display list
createStorageList();

// Retrieve searches from Local Storage, return an array
function getRecentSearches() {
  //get recent searches from localStorage
  if (searches) {
    return JSON.parse(searches);
  }
  return [];
}

// Create a list item
function createItem(item) {
  const recentSearchList = document.getElementById('recentSearchList');
  recentSearchList.insertAdjacentHTML('afterbegin', `<li>${item}</li>`);
}

// Create initial list from items in local storage 
function createStorageList() {
  const searchList = getRecentSearches();
  searchList.forEach(searchItem => {
   createItem(searchItem);
  });
}

// Set event handlers
searchForm.addEventListener('submit', () => {
  const searches = getRecentSearches();
  const searchString = searchBar.value;

  searches.push(searchString) 
  // Set local storage item
  createItem(searchString);
});

clearButton.addEventListener('click', () => {
  //remove searches 
  recentSearchList.innerHTML = '';
});