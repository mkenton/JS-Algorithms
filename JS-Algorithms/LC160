/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA===null || headB===null) {
        return null}
    
    let nodeA=headA;
    let nodeB=headB;
    while (nodeA!==nodeB) {
        //move both nodes forward
        nodeA=nodeA.next
        nodeB=nodeB.next

        //if links match, return intersection node
        if (nodeA===nodeB){
            return nodeA
        }

        // if lists are of different lengths, swap heads when a list reaches end to iterate over paths until both reach null at same time (no intersection) or until both reach intersection point.
        //if listA reaches end, set to head of listB
        if (nodeA===null) {
            nodeA=headB
        }
        //if listB reaches end, set to head of listA
        if (nodeB===null){
            nodeB=headA
        }
        
        }
        //return either node (while loop has exited, meaning nodeA=nodeB (intersection point or 'null')
    return nodeA
            
    };