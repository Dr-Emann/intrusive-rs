var N=null,E="",T="t",U="u",searchIndex={};
var R=["unsaferef","cursor","is_null","Checks if the cursor is currently pointing to the null…","Returns a reference to the object that the cursor is…","option","move_next","Moves the cursor to the next element of the `LinkedList`.","move_prev","Moves the cursor to the previous element of the…","peek_next","Returns a cursor pointing to the next element of the…","peek_prev","Returns a cursor pointing to the previous element of the…","linkedlist","cursormut","intrusive_collections","Intrusive link that allows an object to be inserted into a…","CursorMut","IntoIter","Creates a new `Link`.","is_linked","force_unlink","as_cursor","Returns a read-only cursor pointing to the current element.","Moves the cursor to the next element of the `RBTree`.","Moves the cursor to the previous element of the `RBTree`.","replace_with","insert_after","insert_before","is_empty","cursor_mut","cursor_from_ptr","Creates a `Cursor` from a pointer to an element.","cursor_mut_from_ptr","Creates a `CursorMut` from a pointer to an element.","Returns a `Cursor` pointing to the first element of the…","front_mut","Returns a `CursorMut` pointing to the first element of the…","Returns a `Cursor` pointing to the last element of the…","back_mut","Returns a `CursorMut` pointing to the last element of the…","fast_clear","Inserts a new element into the `RBTree`.","Moves the cursor to the next element of the…","splice_after","split_after","Splits the list into two after the current element. This…","singlylinkedlist","Returns a null `Cursor` for this list.","Returns a null `CursorMut` for this list.","push_front","pop_front","into_raw","from_raw","result","try_from","try_into","borrow_mut","to_owned","clone_into","intrusive_collections::linked_list","type_id","borrow","typeid","into_iter","intrusive_collections::rbtree","intrusive_collections::singly_linked_list","formatter","intoiter","next_back","default","Consumes the owned pointer and returns a raw pointer to…","UnsafeRef","LinkedList","Cursor","InsertCursor","SinglyLinkedList","IntrusivePointer","KeyAdapter","offset_of"];

searchIndex["intrusive_collections"]={"doc":"Intrusive collections for Rust.","i":[[3,R[73],R[16],"Unchecked shared pointer",N,N],[4,"Bound",E,"An endpoint of a range of keys.",N,N],[13,"Included",E,"An inclusive bound.",0,N],[13,"Excluded",E,"An exclusive bound.",0,N],[13,"Unbounded",E,"An infinite endpoint. Indicates that there is no bound in…",0,N],[11,R[54],E,"Creates an `UnsafeRef` from a raw pointer",1,[[],[R[0]]]],[11,R[53],E,"Converts an `UnsafeRef` into a raw pointer",1,[[]]],[11,"from_box",E,"Creates an `UnsafeRef` from a `Box`",1,[[["box"]],[R[0]]]],[11,"into_box",E,"Converts an `UnsafeRef` into a `Box`",1,[[],["box"]]],[0,"linked_list",E,"Intrusive doubly-linked list.",N,N],[3,"Link",R[61],R[17],N,N],[3,R[75],E,"A cursor which provides read-only access to a `LinkedList`.",N,N],[3,R[18],E,"A cursor which provides mutable access to a `LinkedList`.",N,N],[3,R[74],E,"An intrusive doubly-linked list.",N,N],[3,"Iter",E,"An iterator over references to the items of a `LinkedList`.",N,N],[3,R[19],E,"An iterator which consumes a `LinkedList`.",N,N],[11,"new",E,R[20],2,[[],["link"]]],[11,R[21],E,"Checks whether the `Link` is linked into a `LinkedList`.",2,[[["self"]],["bool"]]],[11,R[22],E,"Forcibly unlinks an object from a `LinkedList`.",2,[[["self"]]]],[11,R[2],E,R[3],3,[[["self"]],["bool"]]],[11,"get",E,R[4],3,[[["self"]],[R[5]]]],[11,R[6],E,R[7],3,[[["self"]]]],[11,R[8],E,R[9],3,[[["self"]]]],[11,R[10],E,R[11],3,[[["self"]],[R[1]]]],[11,R[12],E,R[13],3,[[["self"]],[R[1]]]],[11,R[2],E,R[3],4,[[["self"]],["bool"]]],[11,"get",E,R[4],4,[[["self"]],[R[5]]]],[11,R[23],E,R[24],4,[[["self"]],[R[1]]]],[11,R[6],E,R[7],4,[[["self"]]]],[11,R[8],E,R[9],4,[[["self"]]]],[11,R[10],E,R[11],4,[[["self"]],[R[1]]]],[11,R[12],E,R[13],4,[[["self"]],[R[1]]]],[11,"remove",E,"Removes the current element from the `LinkedList`.",4,[[["self"]],[R[5]]]],[11,R[27],E,"Removes the current element from the `LinkedList` and…",4,[[["self"]],[R[55]]]],[11,R[28],E,"Inserts a new element into the `LinkedList` after the…",4,[[["self"]]]],[11,R[29],E,"Inserts a new element into the `LinkedList` before the…",4,[[["self"]]]],[11,R[45],E,"Inserts the elements from the given `LinkedList` after the…",4,[[["self"],[R[14]]]]],[11,"splice_before",E,"Moves all element from the given `LinkedList` before the…",4,[[["self"],[R[14]]]]],[11,R[46],E,R[47],4,[[["self"]],[R[14]]]],[11,"split_before",E,"Splits the list into two before the current element. This…",4,[[["self"]],[R[14]]]],[11,"new",E,"Creates an empty `LinkedList`.",5,[[["a"]],[R[14]]]],[11,R[30],E,"Returns `true` if the `LinkedList` is empty.",5,[[["self"]],["bool"]]],[11,R[1],E,R[49],5,[[["self"]],[R[1]]]],[11,R[31],E,R[50],5,[[["self"]],[R[15]]]],[11,R[32],E,R[33],5,[[["self"]],[R[1]]]],[11,R[34],E,R[35],5,[[["self"]],[R[15]]]],[11,"front",E,R[36],5,[[["self"]],[R[1]]]],[11,R[37],E,R[38],5,[[["self"]],[R[15]]]],[11,"back",E,R[39],5,[[["self"]],[R[1]]]],[11,R[40],E,R[41],5,[[["self"]],[R[15]]]],[11,"iter",E,"Gets an iterator over the objects in the `LinkedList`.",5,[[["self"]],["iter"]]],[11,"clear",E,"Removes all elements from the `LinkedList`.",5,[[["self"]]]],[11,R[42],E,"Empties the `LinkedList` without unlinking or freeing…",5,[[["self"]]]],[11,"take",E,"Takes all the elements out of the `LinkedList`, leaving it…",5,[[["self"]],[R[14]]]],[11,R[51],E,"Inserts a new element at the start of the `LinkedList`.",5,[[["self"]]]],[11,"push_back",E,"Inserts a new element at the end of the `LinkedList`.",5,[[["self"]]]],[11,R[52],E,"Removes the first element of the `LinkedList`.",5,[[["self"]],[R[5]]]],[11,"pop_back",E,"Removes the last element of the `LinkedList`.",5,[[["self"]],[R[5]]]],[0,"rbtree",R[16],"Intrusive red-black tree.",N,N],[3,"Link",R[66],R[17],N,N],[3,R[75],E,"A cursor which provides read-only access to a `RBTree`.",N,N],[3,R[18],E,"A cursor which provides mutable access to a `RBTree`.",N,N],[3,"RBTree",E,"An intrusive red-black tree.",N,N],[3,R[76],E,"A cursor pointing to a slot in which an element can be…",N,N],[3,"Iter",E,"An iterator over references to the items of a `RBTree`.",N,N],[3,R[19],E,"An iterator which consumes a `RBTree`.",N,N],[4,"Entry",E,"An entry in a `RBTree`.",N,N],[13,"Occupied",E,"An occupied entry.",6,N],[13,"Vacant",E,"A vacant entry.",6,N],[11,"new",E,R[20],7,[[],["link"]]],[11,R[21],E,"Checks whether the `Link` is linked into a `RBTree`.",7,[[["self"]],["bool"]]],[11,R[22],E,"Forcibly unlinks an object from a `RBTree`.",7,[[["self"]]]],[11,R[2],E,R[3],8,[[["self"]],["bool"]]],[11,"get",E,R[4],8,[[["self"]],[R[5]]]],[11,R[6],E,R[25],8,[[["self"]]]],[11,R[8],E,R[26],8,[[["self"]]]],[11,R[10],E,R[11],8,[[["self"]],[R[1]]]],[11,R[12],E,R[13],8,[[["self"]],[R[1]]]],[11,R[2],E,R[3],9,[[["self"]],["bool"]]],[11,"get",E,R[4],9,[[["self"]],[R[5]]]],[11,R[23],E,R[24],9,[[["self"]],[R[1]]]],[11,R[6],E,R[25],9,[[["self"]]]],[11,R[8],E,R[26],9,[[["self"]]]],[11,R[10],E,R[11],9,[[["self"]],[R[1]]]],[11,R[12],E,R[13],9,[[["self"]],[R[1]]]],[11,"remove",E,"Removes the current element from the `RBTree`.",9,[[["self"]],[R[5]]]],[11,R[27],E,"Removes the current element from the `RBTree` and inserts…",9,[[["self"]],[R[55]]]],[11,R[28],E,"Inserts a new element into the `RBTree` after the current…",9,[[["self"]]]],[11,R[29],E,"Inserts a new element into the `RBTree` before the current…",9,[[["self"]]]],[11,"insert",E,R[43],9,[[["self"]]]],[11,"new",E,"Creates an empty `RBTree`.",10,[[["a"]],["rbtree"]]],[11,R[30],E,"Returns `true` if the `RBTree` is empty.",10,[[["self"]],["bool"]]],[11,R[1],E,"Returns a null `Cursor` for this tree.",10,[[["self"]],[R[1]]]],[11,R[31],E,"Returns a null `CursorMut` for this tree.",10,[[["self"]],[R[15]]]],[11,R[32],E,R[33],10,[[["self"]],[R[1]]]],[11,R[34],E,R[35],10,[[["self"]],[R[15]]]],[11,"front",E,R[36],10,[[["self"]],[R[1]]]],[11,R[37],E,R[38],10,[[["self"]],[R[15]]]],[11,"back",E,R[39],10,[[["self"]],[R[1]]]],[11,R[40],E,R[41],10,[[["self"]],[R[15]]]],[11,"iter",E,"Gets an iterator over the objects in the `RBTree`, in…",10,[[["self"]],["iter"]]],[11,"clear",E,"Removes all elements from the `RBTree`.",10,[[["self"]]]],[11,R[42],E,"Empties the `RBTree` without unlinking or freeing objects…",10,[[["self"]]]],[11,"take",E,"Takes all the elements out of the `RBTree`, leaving it…",10,[[["self"]],["rbtree"]]],[11,"find",E,"Returns a `Cursor` pointing to an element with the given…",10,[[["self"],["q"]],[R[1]]]],[11,"find_mut",E,"Returns a `CursorMut` pointing to an element with the…",10,[[["self"],["q"]],[R[15]]]],[11,"lower_bound",E,"Returns a `Cursor` pointing to the lowest element whose…",10,[[["bound"],["self"],["q"]],[R[1]]]],[11,"lower_bound_mut",E,"Returns a `CursorMut` pointing to the first element whose…",10,[[["self"],["bound"],["q"]],[R[15]]]],[11,"upper_bound",E,"Returns a `Cursor` pointing to the last element whose key…",10,[[["bound"],["self"],["q"]],[R[1]]]],[11,"upper_bound_mut",E,"Returns a `CursorMut` pointing to the last element whose…",10,[[["self"],["bound"],["q"]],[R[15]]]],[11,"insert",E,R[43],10,[[["self"]],[R[15]]]],[11,"entry",E,"Returns an `Entry` for the given key which contains a…",10,[[["self"],["q"]],["entry"]]],[11,"range",E,"Constructs a double-ended iterator over a sub-range of…",10,[[["min"],["max"],["bound"],["self"],["bound"]],["iter"]]],[11,"insert",E,"Inserts a new element into the `RBTree` at the location…",11,[[],[R[15]]]],[11,"or_insert",E,"Inserts an element into the `RBTree` if the entry is…",6,[[],[R[15]]]],[11,"or_insert_with",E,"Calls the given function and inserts the result into the…",6,[[["f"]],[R[15]]]],[0,"singly_linked_list",R[16],"Intrusive singly-linked list.",N,N],[3,"Link",R[67],R[17],N,N],[3,R[75],E,"A cursor which provides read-only access to a…",N,N],[3,R[18],E,"A cursor which provides mutable access to a…",N,N],[3,R[77],E,"An intrusive singly-linked list.",N,N],[3,"Iter",E,"An iterator over references to the items of a…",N,N],[3,R[19],E,"An iterator which consumes a `SinglyLinkedList`.",N,N],[11,"new",E,R[20],12,[[],["link"]]],[11,R[21],E,"Checks whether the `Link` is linked into a…",12,[[["self"]],["bool"]]],[11,R[22],E,"Forcibly unlinks an object from a `SinglyLinkedList`.",12,[[["self"]]]],[11,R[2],E,R[3],13,[[["self"]],["bool"]]],[11,"get",E,R[4],13,[[["self"]],[R[5]]]],[11,R[6],E,R[44],13,[[["self"]]]],[11,R[10],E,R[11],13,[[["self"]],[R[1]]]],[11,R[2],E,R[3],14,[[["self"]],["bool"]]],[11,"get",E,R[4],14,[[["self"]],[R[5]]]],[11,R[23],E,R[24],14,[[["self"]],[R[1]]]],[11,R[6],E,R[44],14,[[["self"]]]],[11,R[10],E,R[11],14,[[["self"]],[R[1]]]],[11,"remove_next",E,"Removes the next element from the `SinglyLinkedList`.",14,[[["self"]],[R[5]]]],[11,"replace_next_with",E,"Removes the next element from the `SinglyLinkedList` and…",14,[[["self"]],[R[55]]]],[11,R[28],E,"Inserts a new element into the `SinglyLinkedList` after…",14,[[["self"]]]],[11,R[45],E,"Inserts the elements from the given `SinglyLinkedList`…",14,[[["self"],[R[48]]]]],[11,R[46],E,R[47],14,[[["self"]],[R[48]]]],[11,"new",E,"Creates an empty `SinglyLinkedList`.",15,[[["a"]],[R[48]]]],[11,R[30],E,"Returns `true` if the `SinglyLinkedList` is empty.",15,[[["self"]],["bool"]]],[11,R[1],E,R[49],15,[[["self"]],[R[1]]]],[11,R[31],E,R[50],15,[[["self"]],[R[15]]]],[11,R[32],E,R[33],15,[[["self"]],[R[1]]]],[11,R[34],E,R[35],15,[[["self"]],[R[15]]]],[11,"front",E,R[36],15,[[["self"]],[R[1]]]],[11,R[37],E,R[38],15,[[["self"]],[R[15]]]],[11,"iter",E,"Gets an iterator over the objects in the `SinglyLinkedList`.",15,[[["self"]],["iter"]]],[11,"clear",E,"Removes all elements from the `SinglyLinkedList`.",15,[[["self"]]]],[11,R[42],E,"Empties the `SinglyLinkedList` without unlinking or…",15,[[["self"]]]],[11,"take",E,"Takes all the elements out of the `SinglyLinkedList`,…",15,[[["self"]],[R[48]]]],[11,R[51],E,"Inserts a new element at the start of the…",15,[[["self"]]]],[11,R[52],E,"Removes the first element of the `SinglyLinkedList`.",15,[[["self"]],[R[5]]]],[8,"Adapter",R[16],"Trait for a adapter which allows a type to be inserted…",N,N],[16,"Link",E,"Collection-specific link type which allows an object to be…",16,N],[16,"Value",E,"Object type which is inserted in an intrusive collection.",16,N],[16,"Pointer",E,"Pointer type which owns an instance of a value.",16,N],[10,"get_value",E,"Gets a reference to an object from a reference to a link…",16,[[["self"]]]],[10,"get_link",E,"Gets a reference to the link for the given object.",16,[[["self"]]]],[8,R[78],E,"Trait representing an owned pointer type which can be…",N,N],[11,R[53],E,R[72],17,[[]]],[10,R[54],E,"Constructs an owned pointer from a raw pointer which was…",17,[[],["self"]]],[8,R[79],E,"Extension of the `Adapter` trait to provide a way of…",N,N],[16,"Key",E,"Type of the key returned by `get_key`.",18,N],[10,"get_key",E,"Gets the key for the given object.",18,[[["self"]]]],[14,R[80],E,"Macro to get the offset of a struct field in bytes from…",N,N],[14,"container_of",E,"Unsafe macro to get a raw pointer to an outer object from…",N,N],[14,"intrusive_adapter",E,"Macro to generate an implementation of `Adapter` for a…",N,N],[11,"from",E,E,1,[[[T]],[T]]],[11,R[56],E,E,1,[[[U]],[R[55]]]],[11,"into",E,E,1,[[],[U]]],[11,R[57],E,E,1,[[],[R[55]]]],[11,R[63],E,E,1,[[["self"]],[T]]],[11,R[58],E,E,1,[[["self"]],[T]]],[11,R[62],E,E,1,[[["self"]],[R[64]]]],[11,R[59],E,E,1,[[["self"]],[T]]],[11,R[60],E,E,1,[[["self"],[T]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[56],E,E,0,[[[U]],[R[55]]]],[11,"into",E,E,0,[[],[U]]],[11,R[57],E,E,0,[[],[R[55]]]],[11,R[63],E,E,0,[[["self"]],[T]]],[11,R[58],E,E,0,[[["self"]],[T]]],[11,R[62],E,E,0,[[["self"]],[R[64]]]],[11,R[59],E,E,0,[[["self"]],[T]]],[11,R[60],E,E,0,[[["self"],[T]]]],[11,"from",R[61],E,2,[[[T]],[T]]],[11,R[56],E,E,2,[[[U]],[R[55]]]],[11,"into",E,E,2,[[],[U]]],[11,R[57],E,E,2,[[],[R[55]]]],[11,R[63],E,E,2,[[["self"]],[T]]],[11,R[58],E,E,2,[[["self"]],[T]]],[11,R[62],E,E,2,[[["self"]],[R[64]]]],[11,R[59],E,E,2,[[["self"]],[T]]],[11,R[60],E,E,2,[[["self"],[T]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[56],E,E,3,[[[U]],[R[55]]]],[11,"into",E,E,3,[[],[U]]],[11,R[57],E,E,3,[[],[R[55]]]],[11,R[63],E,E,3,[[["self"]],[T]]],[11,R[58],E,E,3,[[["self"]],[T]]],[11,R[62],E,E,3,[[["self"]],[R[64]]]],[11,R[59],E,E,3,[[["self"]],[T]]],[11,R[60],E,E,3,[[["self"],[T]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[56],E,E,4,[[[U]],[R[55]]]],[11,"into",E,E,4,[[],[U]]],[11,R[57],E,E,4,[[],[R[55]]]],[11,R[63],E,E,4,[[["self"]],[T]]],[11,R[58],E,E,4,[[["self"]],[T]]],[11,R[62],E,E,4,[[["self"]],[R[64]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[56],E,E,5,[[[U]],[R[55]]]],[11,R[65],E,E,5,[[],["i"]]],[11,"into",E,E,5,[[],[U]]],[11,R[57],E,E,5,[[],[R[55]]]],[11,R[63],E,E,5,[[["self"]],[T]]],[11,R[58],E,E,5,[[["self"]],[T]]],[11,R[62],E,E,5,[[["self"]],[R[64]]]],[11,"from",E,E,19,[[[T]],[T]]],[11,R[56],E,E,19,[[[U]],[R[55]]]],[11,R[65],E,E,19,[[],["i"]]],[11,"into",E,E,19,[[],[U]]],[11,R[57],E,E,19,[[],[R[55]]]],[11,R[63],E,E,19,[[["self"]],[T]]],[11,R[58],E,E,19,[[["self"]],[T]]],[11,R[62],E,E,19,[[["self"]],[R[64]]]],[11,R[59],E,E,19,[[["self"]],[T]]],[11,R[60],E,E,19,[[["self"],[T]]]],[11,"from",E,E,20,[[[T]],[T]]],[11,R[56],E,E,20,[[[U]],[R[55]]]],[11,R[65],E,E,20,[[],["i"]]],[11,"into",E,E,20,[[],[U]]],[11,R[57],E,E,20,[[],[R[55]]]],[11,R[63],E,E,20,[[["self"]],[T]]],[11,R[58],E,E,20,[[["self"]],[T]]],[11,R[62],E,E,20,[[["self"]],[R[64]]]],[11,"from",R[66],E,7,[[[T]],[T]]],[11,R[56],E,E,7,[[[U]],[R[55]]]],[11,"into",E,E,7,[[],[U]]],[11,R[57],E,E,7,[[],[R[55]]]],[11,R[63],E,E,7,[[["self"]],[T]]],[11,R[58],E,E,7,[[["self"]],[T]]],[11,R[62],E,E,7,[[["self"]],[R[64]]]],[11,R[59],E,E,7,[[["self"]],[T]]],[11,R[60],E,E,7,[[["self"],[T]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[56],E,E,8,[[[U]],[R[55]]]],[11,"into",E,E,8,[[],[U]]],[11,R[57],E,E,8,[[],[R[55]]]],[11,R[63],E,E,8,[[["self"]],[T]]],[11,R[58],E,E,8,[[["self"]],[T]]],[11,R[62],E,E,8,[[["self"]],[R[64]]]],[11,R[59],E,E,8,[[["self"]],[T]]],[11,R[60],E,E,8,[[["self"],[T]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[56],E,E,9,[[[U]],[R[55]]]],[11,"into",E,E,9,[[],[U]]],[11,R[57],E,E,9,[[],[R[55]]]],[11,R[63],E,E,9,[[["self"]],[T]]],[11,R[58],E,E,9,[[["self"]],[T]]],[11,R[62],E,E,9,[[["self"]],[R[64]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[56],E,E,10,[[[U]],[R[55]]]],[11,R[65],E,E,10,[[],["i"]]],[11,"into",E,E,10,[[],[U]]],[11,R[57],E,E,10,[[],[R[55]]]],[11,R[63],E,E,10,[[["self"]],[T]]],[11,R[58],E,E,10,[[["self"]],[T]]],[11,R[62],E,E,10,[[["self"]],[R[64]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[56],E,E,11,[[[U]],[R[55]]]],[11,"into",E,E,11,[[],[U]]],[11,R[57],E,E,11,[[],[R[55]]]],[11,R[63],E,E,11,[[["self"]],[T]]],[11,R[58],E,E,11,[[["self"]],[T]]],[11,R[62],E,E,11,[[["self"]],[R[64]]]],[11,"from",E,E,21,[[[T]],[T]]],[11,R[56],E,E,21,[[[U]],[R[55]]]],[11,R[65],E,E,21,[[],["i"]]],[11,"into",E,E,21,[[],[U]]],[11,R[57],E,E,21,[[],[R[55]]]],[11,R[63],E,E,21,[[["self"]],[T]]],[11,R[58],E,E,21,[[["self"]],[T]]],[11,R[62],E,E,21,[[["self"]],[R[64]]]],[11,R[59],E,E,21,[[["self"]],[T]]],[11,R[60],E,E,21,[[["self"],[T]]]],[11,"from",E,E,22,[[[T]],[T]]],[11,R[56],E,E,22,[[[U]],[R[55]]]],[11,R[65],E,E,22,[[],["i"]]],[11,"into",E,E,22,[[],[U]]],[11,R[57],E,E,22,[[],[R[55]]]],[11,R[63],E,E,22,[[["self"]],[T]]],[11,R[58],E,E,22,[[["self"]],[T]]],[11,R[62],E,E,22,[[["self"]],[R[64]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[56],E,E,6,[[[U]],[R[55]]]],[11,"into",E,E,6,[[],[U]]],[11,R[57],E,E,6,[[],[R[55]]]],[11,R[63],E,E,6,[[["self"]],[T]]],[11,R[58],E,E,6,[[["self"]],[T]]],[11,R[62],E,E,6,[[["self"]],[R[64]]]],[11,"from",R[67],E,12,[[[T]],[T]]],[11,R[56],E,E,12,[[[U]],[R[55]]]],[11,"into",E,E,12,[[],[U]]],[11,R[57],E,E,12,[[],[R[55]]]],[11,R[63],E,E,12,[[["self"]],[T]]],[11,R[58],E,E,12,[[["self"]],[T]]],[11,R[62],E,E,12,[[["self"]],[R[64]]]],[11,R[59],E,E,12,[[["self"]],[T]]],[11,R[60],E,E,12,[[["self"],[T]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,R[56],E,E,13,[[[U]],[R[55]]]],[11,"into",E,E,13,[[],[U]]],[11,R[57],E,E,13,[[],[R[55]]]],[11,R[63],E,E,13,[[["self"]],[T]]],[11,R[58],E,E,13,[[["self"]],[T]]],[11,R[62],E,E,13,[[["self"]],[R[64]]]],[11,R[59],E,E,13,[[["self"]],[T]]],[11,R[60],E,E,13,[[["self"],[T]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[56],E,E,14,[[[U]],[R[55]]]],[11,"into",E,E,14,[[],[U]]],[11,R[57],E,E,14,[[],[R[55]]]],[11,R[63],E,E,14,[[["self"]],[T]]],[11,R[58],E,E,14,[[["self"]],[T]]],[11,R[62],E,E,14,[[["self"]],[R[64]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[56],E,E,15,[[[U]],[R[55]]]],[11,R[65],E,E,15,[[],["i"]]],[11,"into",E,E,15,[[],[U]]],[11,R[57],E,E,15,[[],[R[55]]]],[11,R[63],E,E,15,[[["self"]],[T]]],[11,R[58],E,E,15,[[["self"]],[T]]],[11,R[62],E,E,15,[[["self"]],[R[64]]]],[11,"from",E,E,23,[[[T]],[T]]],[11,R[56],E,E,23,[[[U]],[R[55]]]],[11,R[65],E,E,23,[[],["i"]]],[11,"into",E,E,23,[[],[U]]],[11,R[57],E,E,23,[[],[R[55]]]],[11,R[63],E,E,23,[[["self"]],[T]]],[11,R[58],E,E,23,[[["self"]],[T]]],[11,R[62],E,E,23,[[["self"]],[R[64]]]],[11,R[59],E,E,23,[[["self"]],[T]]],[11,R[60],E,E,23,[[["self"],[T]]]],[11,"from",E,E,24,[[[T]],[T]]],[11,R[56],E,E,24,[[[U]],[R[55]]]],[11,R[65],E,E,24,[[],["i"]]],[11,"into",E,E,24,[[],[U]]],[11,R[57],E,E,24,[[],[R[55]]]],[11,R[63],E,E,24,[[["self"]],[T]]],[11,R[58],E,E,24,[[["self"]],[T]]],[11,R[62],E,E,24,[[["self"]],[R[64]]]],[11,R[53],R[16],E,1,[[]]],[11,R[54],E,E,1,[[],["self"]]],[11,"fmt",E,E,1,[[[R[68]],["self"]],[R[55]]]],[11,"fmt",R[61],E,2,[[[R[68]],["self"]],[R[55]]]],[11,"fmt",E,E,5,[[[R[68]],["self"]],[R[55]]]],[11,"fmt",R[66],E,7,[[[R[68]],["self"]],[R[55]]]],[11,"fmt",E,E,10,[[[R[68]],["self"]],[R[55]]]],[11,"fmt",R[67],E,12,[[[R[68]],["self"]],[R[55]]]],[11,"fmt",E,E,15,[[[R[68]],["self"]],[R[55]]]],[11,"fmt",R[16],E,0,[[[R[68]],["self"]],[R[55]]]],[11,"eq",E,E,0,[[["self"],["bound"]],["bool"]]],[11,"ne",E,E,0,[[["self"],["bound"]],["bool"]]],[11,"deref",E,E,1,[[["self"]],[T]]],[11,"drop",R[61],E,5,[[["self"]]]],[11,"drop",R[66],E,10,[[["self"]]]],[11,"drop",R[67],E,15,[[["self"]]]],[11,"hash",R[16],E,0,[[["self"],["__h"]]]],[11,"next",R[61],E,19,[[["self"]],[R[5]]]],[11,"next",E,E,20,[[["self"]],[R[5]]]],[11,"next",R[66],E,21,[[["self"]],[R[5]]]],[11,"next",E,E,22,[[["self"]],[R[5]]]],[11,"next",R[67],E,23,[[["self"]],[R[5]]]],[11,"next",E,E,24,[[["self"]],[R[5]]]],[11,R[65],R[61],E,5,[[],[R[69]]]],[11,R[65],R[66],E,10,[[],[R[69]]]],[11,R[65],R[67],E,15,[[],[R[69]]]],[11,R[70],R[61],E,19,[[["self"]],[R[5]]]],[11,R[70],E,E,20,[[["self"]],[R[5]]]],[11,R[70],R[66],E,21,[[["self"]],[R[5]]]],[11,R[70],E,E,22,[[["self"]],[R[5]]]],[11,"as_ref",R[16],E,1,[[["self"]],[T]]],[11,"clone",E,E,1,[[["self"]],[R[0]]]],[11,"clone",R[61],E,2,[[["self"]],["link"]]],[11,"clone",E,E,3,[[["self"]],[R[1]]]],[11,"clone",E,E,19,[[["self"]],["iter"]]],[11,"clone",R[66],E,7,[[["self"]],["link"]]],[11,"clone",E,E,8,[[["self"]],[R[1]]]],[11,"clone",E,E,21,[[["self"]],["iter"]]],[11,"clone",R[67],E,12,[[["self"]],["link"]]],[11,"clone",E,E,13,[[["self"]],[R[1]]]],[11,"clone",E,E,23,[[["self"]],["iter"]]],[11,"clone",R[16],E,0,[[["self"]],["bound"]]],[11,R[71],R[61],E,2,[[],["link"]]],[11,R[71],E,E,5,[[],[R[14]]]],[11,R[71],R[66],E,7,[[],["link"]]],[11,R[71],E,E,10,[[],["rbtree"]]],[11,R[71],R[67],E,12,[[],["link"]]],[11,R[71],E,E,15,[[],[R[48]]]],[11,R[63],R[16],E,1,[[["self"]],[T]]],[11,R[53],E,R[72],17,[[]]]],"p":[[4,"Bound"],[3,R[73]],[3,"Link"],[3,R[75]],[3,R[18]],[3,R[74]],[4,"Entry"],[3,"Link"],[3,R[75]],[3,R[18]],[3,"RBTree"],[3,R[76]],[3,"Link"],[3,R[75]],[3,R[18]],[3,R[77]],[8,"Adapter"],[8,R[78]],[8,R[79]],[3,"Iter"],[3,R[19]],[3,"Iter"],[3,R[19]],[3,"Iter"],[3,R[19]]]};
searchIndex["memoffset"]={"doc":"A crate used for calculating offsets of struct members and…","i":[[14,R[80],"memoffset","Calculates the offset of the specified field from the…",N,N],[14,"span_of",E,"Produces a range instance representing the sub-slice…",N,N]],"p":[]};
addSearchOptions(searchIndex);initSearch(searchIndex);