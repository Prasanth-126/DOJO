require(["dojox/collections/ArrayList"], function(ArrayList) {

    var list = new ArrayList();

    console.log("Initial:", list.toArray());

    list.add("A");
    list.add("B");
    console.log("After add:", list.toArray());

    list.addRange(["C", "D"]);
    console.log("After addRange:", list.toArray());

    // clone
    var cloneList = list.clone();
    console.log("Cloned:", cloneList.toArray());

    console.log("Contains 'B' ?", list.contains("B"));
    console.log("Index of 'C':", list.indexOf("C"));

    list.insert(2, "X");
    console.log("After insert:", list.toArray());

    list.remove("B");
    console.log("After remove 'B':", list.toArray());

    list.reverse();
    console.log("After reverse:", list.toArray());

    list.sort();
    console.log("After sort:", list.toArray());

    list.setByIndex(1, "ZZ");
    console.log("After setByIndex:", list.toArray());

});
