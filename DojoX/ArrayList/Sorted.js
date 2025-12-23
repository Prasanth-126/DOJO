require(["dojox/collections/SortedList"], () => {

    var sortlist = new dojox.collections.SortedList()

    console.log(sortlist);

    sortlist.add(1, "Kavya")
    sortlist.add(3, "Navya")
    sortlist.add(4, "Sravya")
    sortlist.add(2, "Divya")

    console.log("Actual Sort :" + sortlist.getValueList(), " - ", sortlist.getKeyList())


   console.log(sortlist.containsKey("6"))


  sortlist.replace("1","Prasanth")
  console.log("After Replace :" + sortlist.getValueList(), " - ", sortlist.getKeyList())

  sortlist.sort()
  console.log("After Replace :" + sortlist.getValueList(), " - ", sortlist.getKeyList())



//    sortlist.clear()
 //   console.log(sortlist);



   
    



    



}




)