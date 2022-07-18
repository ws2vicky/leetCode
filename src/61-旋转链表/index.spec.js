/**
 * @description 61-旋转链表
 * @author 氧化氢
 */

import rotateRight from "./index3";

describe('61-旋转链表', () => {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  function getList(arr) {
    let hair = new ListNode(),
      p = hair
    for (let i = 0; i < arr.length; i++) {
      p.next = new ListNode(arr[i])
      p = p.next
    }

    return hair.next
  }
  test('测试用例一', () => {
    var arr = [1, 2, 3, 4, 5]
    var list = getList(arr),
      k = 2
    var res = rotateRight(list, k)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": {
            "next": {
              "next": null,
              "val": 3
            },
            "val": 2
          },
          "val": 1
        },
        "val": 5
      },
      "val": 4
    })
  })
  test('测试用例二', () => {
    var arr = [0, 1, 2]
    var list = getList(arr),
      k = 4
    var res = rotateRight(list, k)
    expect(res).toEqual({
      "next": {
        "next": {
          "next": null,
          "val": 1
        },
        "val": 0
      },
      "val": 2
    })
  })
})