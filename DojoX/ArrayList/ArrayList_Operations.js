require(["dojox/collections/ArrayList"], function(ArrayList) {

    var list = new ArrayList();

    console.log("Initial:", list.toArray());

    // Add elements
    list.add("A");
    list.add("B");
    console.log("After add:", list.toArray());

    // Add multiple elements
    list.addRange(["C", "D"]);
    console.log("After addRange:", list.toArray());

    // Clone list
    var cloneList = list.clone();
    console.log("Cloned:", cloneList.toArray());

    // Check contains and indexOf
    console.log("Contains 'B' ?", list.contains("B"));
    console.log("Index of 'C':", list.indexOf("C"));

    // Insert element at index 2
    list.insert(2, "X");
    console.log("After insert:", list.toArray());

    // Remove an element
    list.remove("B");
    console.log("After remove 'B':", list.toArray());

    // Reverse the list
    list.reverse();
    console.log("After reverse:", list.toArray());

    // Sort the list
    list.sort();
    console.log("After sort:", list.toArray());

    // Set element by index
    list.setByIndex(1, "ZZ");
    console.log("After setByIndex:", list.toArray());


    // item(i) - access element by index
    console.log("Item at index 1:", list.item(1));

    // getIterator() - manual iteration
    var iterator = list.getIterator();
    console.log("Iterating with getIterator():");
    while(iterator.hasNext()){
        console.log(iterator.getNext());
    }

    // forEach(func, scope) - iterate with function
    console.log("Iterating with forEach():");
    list.forEach(function(item, index){
        console.log(index, item);
    });

});
