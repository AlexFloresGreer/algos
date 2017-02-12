//input: [3,2,4]
//target: 6
//output [1,2]

function twoSum(nums, target) {

  var j = 1;

  for (var i = 0; i < nums.length; i++) {

      if (nums[i] + nums[j] == target) {

              return( [i , j ] );

      } else {
          j++;
          i--;

      }
  }

}



console.log(twoSum( [4, 4, 4], 8))
