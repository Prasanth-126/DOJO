require(["dojox/collections/Dictionary"], function(Dict) {
    var dict = new Dict();

    // --- add(key, value) ---
    dict.add(1, "Kanna");
    dict.add(2, "Ravi");
    dict.add(3, "Meena");
    console.log("After add:", dict.getValueList());

    // --- containsKey(key) ---
    console.log("Contains key 2?", dict.containsKey(2));   // true
    console.log("Contains key '2'?", dict.containsKey("2")); // false

    // --- containsValue(value) ---
    console.log("Contains value 'Ravi'?", dict.containsValue("Ravi")); // true

    // --- entry(key) ---
    var e = dict.entry(3);
    console.log("Entry for key 3:", e); // { key: 3, value: "Meena" }

    // --- item(key) ---
    console.log("Item at key 1:", dict.item(1)); // "Kanna"

    // --- getKeyList() & getValueList() ---
    console.log("Keys:", dict.getKeyList());   // [1,2,3]
    console.log("Values:", dict.getValueList()); // ["Kanna","Ravi","Meena"]

    // --- forEach(function, scope) ---
    console.log("Using forEach:");
    dict.forEach(function(entry) {
        console.log("Key:", entry.key, "Value:", entry.value);
    });

    // --- getIterator() ---
    console.log("Using getIterator:");
    var iterator = dict.getIterator();
    while (!iterator.atEnd()) {
        var entry = iterator.get();
        console.log("Key:", entry.key, "Value:", entry.value);
    }

    // --- clone() ---
    var cloned = dict.clone();
    console.log("Cloned dictionary keys:", cloned.getKeyList());

    // --- remove(key) ---
    dict.remove(2);
    console.log("After remove key 2:", dict.getKeyList(), dict.getValueList());

    // --- clear() ---
    dict.clear();
    console.log("After clear:", dict.getKeyList(), dict.getValueList());
});
