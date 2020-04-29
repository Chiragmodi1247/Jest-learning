const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it' , () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain('beer');
})

function compileAndroidCode() {
  throw new Error("Not able to compile")
}

test('error is thrown' , () => {
  // expect(compileAndroidCode()).toThrow();
  // expect(compileAndroidCode()).toThrow(Error)
})

let fetchData = (callback) => {
  let data = "peanut butter";
  setTimeout(callback(data) , 2000)
}

// Don't do this!
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }
//
//   fetchData(callback);
// });

test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done()
    } catch (e) {
      done(e)
    }
  }
  fetchData(callback);
});

//promises
let myPromise = new Promise( (res,rej) => {
  setTimeout( function () {
    res("Done")
  },1000);
})

test("MyPromise is working" , () => {
  return myPromise.then(data => {
    expect(data).toBe('Done')
  })
})

test('async is working', async () => {
  const data = await myPromise;
  expect(data).toBe('Done');
});

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

test('mock fns' , () => {
// The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

})

test('mock functions' , () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(10).mockReturnValueOnce('10').mockReturnValue(true);
  console.log(myMock(),myMock(),myMock(),myMock(),myMock());
})
