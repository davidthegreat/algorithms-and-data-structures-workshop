// What is the time and space complexity of following code :

function example(N, M) {
  var a = 0, b = 0;
  for (var i = 0; i < N; i++) {
      a = a + Math.random();
  }
  for (var j = 0; j < M; j++) {
      b = b + Math.random();
  }
}

1. O(N * M) time, O(1) space
2. O(N + M) time, O(N + M) space
3. O(N + M) time, O(1) space
4. O(N * M) time, O(N + M) space
5. O(N * M) time, O(N * M) space


 // What is the time and space complexity of following code :

function example(N) {
  var a = 0, b = 0;
  for (var i = 0; i < N; i++) {
      for (j = 0; j < N; j++) {
          a = a + j;
      }
  }
  for (var k = 0; k < N; k++) {
      b = b + k;
  }
}

1. O(N * N) time, O(1) space
2. O(N) time, O(N) space
3. O(N) time, O(N) space
4. O(N * N) time, O(N) space
5. O(N * N * N) time, O(1) space


// What is the time complexity of following code :


function example(N) {
  var a = 0;
  for (var i = 0; i < N; i++) {
      for (var j = N; j > i; j--) {
          a = a + i + j;
      }
  }
}


1. O(N)
2. O(N*log(N))
3. O(N * Sqrt(N))
4. O(N*N)



// What is the time complexity of following code :

function example(arr){
  var j = 0;
  var n = arr.length();
     for(var i = 0; i < n; ++i) {
         while(j < n && arr[i] < arr[j]) {
             j++;
         }
     }
}
