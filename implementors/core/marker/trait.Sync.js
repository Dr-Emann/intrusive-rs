(function() {var implementors = {};
implementors["intrusive_collections"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"intrusive_collections/enum.Bound.html\" title=\"enum intrusive_collections::Bound\">Bound</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["intrusive_collections::Bound"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Link.html\" title=\"struct intrusive_collections::linked_list::Link\">Link</a>",synthetic:true,types:["intrusive_collections::linked_list::Link"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Cursor.html\" title=\"struct intrusive_collections::linked_list::Cursor\">Cursor</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::linked_list::Cursor"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.CursorMut.html\" title=\"struct intrusive_collections::linked_list::CursorMut\">CursorMut</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::linked_list::CursorMut"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Iter.html\" title=\"struct intrusive_collections::linked_list::Iter\">Iter</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::linked_list::Iter"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.IntoIter.html\" title=\"struct intrusive_collections::linked_list::IntoIter\">IntoIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.Value\" title=\"type intrusive_collections::Adapter::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["intrusive_collections::linked_list::IntoIter"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Link.html\" title=\"struct intrusive_collections::rbtree::Link\">Link</a>",synthetic:true,types:["intrusive_collections::rbtree::Link"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Cursor.html\" title=\"struct intrusive_collections::rbtree::Cursor\">Cursor</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::rbtree::Cursor"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.CursorMut.html\" title=\"struct intrusive_collections::rbtree::CursorMut\">CursorMut</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::rbtree::CursorMut"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.InsertCursor.html\" title=\"struct intrusive_collections::rbtree::InsertCursor\">InsertCursor</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::rbtree::InsertCursor"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Iter.html\" title=\"struct intrusive_collections::rbtree::Iter\">Iter</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::rbtree::Iter"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.IntoIter.html\" title=\"struct intrusive_collections::rbtree::IntoIter\">IntoIter</a>&lt;A&gt;",synthetic:true,types:["intrusive_collections::rbtree::IntoIter"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"intrusive_collections/rbtree/enum.Entry.html\" title=\"enum intrusive_collections::rbtree::Entry\">Entry</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::rbtree::Entry"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Link.html\" title=\"struct intrusive_collections::singly_linked_list::Link\">Link</a>",synthetic:true,types:["intrusive_collections::singly_linked_list::Link"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Cursor.html\" title=\"struct intrusive_collections::singly_linked_list::Cursor\">Cursor</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::singly_linked_list::Cursor"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.CursorMut.html\" title=\"struct intrusive_collections::singly_linked_list::CursorMut\">CursorMut</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::singly_linked_list::CursorMut"]},{text:"impl&lt;'a, A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Iter.html\" title=\"struct intrusive_collections::singly_linked_list::Iter\">Iter</a>&lt;'a, A&gt;",synthetic:true,types:["intrusive_collections::singly_linked_list::Iter"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.IntoIter.html\" title=\"struct intrusive_collections::singly_linked_list::IntoIter\">IntoIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.Value\" title=\"type intrusive_collections::Adapter::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["intrusive_collections::singly_linked_list::IntoIter"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/struct.UnsafeRef.html\" title=\"struct intrusive_collections::UnsafeRef\">UnsafeRef</a>&lt;T&gt;",synthetic:false,types:["intrusive_collections::unsafe_ref::UnsafeRef"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&lt;Link = <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Link.html\" title=\"struct intrusive_collections::linked_list::Link\">Link</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.LinkedList.html\" title=\"struct intrusive_collections::linked_list::LinkedList\">LinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.Value\" title=\"type intrusive_collections::Adapter::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:false,types:["intrusive_collections::linked_list::LinkedList"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&lt;Link = <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Link.html\" title=\"struct intrusive_collections::rbtree::Link\">Link</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.RBTree.html\" title=\"struct intrusive_collections::rbtree::RBTree\">RBTree</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.Value\" title=\"type intrusive_collections::Adapter::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:false,types:["intrusive_collections::rbtree::RBTree"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&lt;Link = <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Link.html\" title=\"struct intrusive_collections::singly_linked_list::Link\">Link</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.SinglyLinkedList.html\" title=\"struct intrusive_collections::singly_linked_list::SinglyLinkedList\">SinglyLinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.Value\" title=\"type intrusive_collections::Adapter::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:false,types:["intrusive_collections::singly_linked_list::SinglyLinkedList"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()