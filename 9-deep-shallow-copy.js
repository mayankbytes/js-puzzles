// deepCopy

const input = {
  func: ()=>{},  
  date: new Date(),
  type: "repeated_workflow_pattern",
  patternLength: 4,
  instances: [
    {
      sequence: "104-107",
      actions: [
        {
          comment:
            "Retrieving table details. Selector: div > div:nth-child(8) > div > div > div.pgContent > div.pgSection > div.pgContent > table",
          innerText: undefined,
          screenshot: "",
          seq: 104,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Content is within an iframe. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 105,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Two iframes??. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 106,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "evaluating",
          innerText: undefined,
          screenshot:
            "temp/screenshot-3f2b8dc4-e26b-4f96-8a1f-8cc7f14f7d9d.png",
          seq: 107,
          selector: "",
          awtId: "12",
          botActionType: "evaluate",
          patternId: "41-112",
        },
      ],
    },
    {
      sequence: "108-111",
      actions: [
        {
          comment:
            "Retrieving table details. Selector: div > div:nth-child(3) > div > div > div.pgContent > table",
          innerText: undefined,
          screenshot: "",
          seq: 108,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Content is within an iframe. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 109,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Two iframes??. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 110,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "evaluating",
          innerText: undefined,
          screenshot:
            "temp/screenshot-6a9f8034-95e4-4082-9735-6a541fa49837.png",
          seq: 111,
          selector: "",
          awtId: "12",
          botActionType: "evaluate",
          patternId: "41-112",
        },
      ],
    },
  ],
  kept: [104, 105, 106, 107],
  removed: [108, 109, 110, 111],
  occurrenceCount: 2,
};

const input1 = {
  type: "repeated_workflow_pattern",
  patternLength: 4,
  instances: [
    {
      sequence: "104-107",
      actions: [
        {
          comment:
            "Retrieving table details. Selector: div > div:nth-child(8) > div > div > div.pgContent > div.pgSection > div.pgContent > table",
          innerText: undefined,
          screenshot: "",
          seq: 104,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Content is within an iframe. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 105,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Two iframes??. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 106,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "evaluating",
          innerText: undefined,
          screenshot:
            "temp/screenshot-3f2b8dc4-e26b-4f96-8a1f-8cc7f14f7d9d.png",
          seq: 107,
          selector: "",
          awtId: "12",
          botActionType: "evaluate",
          patternId: "41-112",
        },
      ],
    },
    {
      sequence: "108-111",
      actions: [
        {
          comment:
            "Retrieving table details. Selector: div > div:nth-child(3) > div > div > div.pgContent > table",
          innerText: undefined,
          screenshot: "",
          seq: 108,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Content is within an iframe. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 109,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "Two iframes??. Selector: iframe#sBodyFrame",
          innerText: undefined,
          screenshot: "",
          seq: 110,
          selector: "",
          awtId: "12",
          botActionType: "log",
          patternId: "41-112",
        },
        {
          comment: "evaluating",
          innerText: undefined,
          screenshot:
            "temp/screenshot-6a9f8034-95e4-4082-9735-6a541fa49837.png",
          seq: 111,
          selector: "",
          awtId: "12",
          botActionType: "evaluate",
          patternId: "41-112",
        },
      ],
    },
  ],
  kept: [104, 105, 106, 107],
  removed: [108, 109, 110, 111],
  occurrenceCount: 2,
};

function isShallowCopy(obj1, obj2) {
  // Basic equality check (not the same object)
  if (obj1 === obj2) return false;
  
  // Check if top-level properties are equal
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  // Verify at least one nested property shares reference
  for (const key in obj1) {
    if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      if (obj1[key] === obj2[key]) {
        return true;
      }
    }
  }
  
  return false;
}

function isDeepCopy(obj1, obj2) {
  // Basic equality check (not the same object)
  if (obj1 === obj2) return false;
  
  // Recursive comparison
  function compare(a, b) {
    if (a === b) return true;
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
      return a === b;
    }
    
    // Check for Date, RegExp, etc.
    if (a.constructor !== b.constructor) return false;
    
    for (const key in a) {
      if (!compare(a[key], b[key])) return false;
    }
    
    return true;
  }
  
  return compare(obj1, obj2) && !isShallowCopy(obj1, obj2);
}

console.log(isDeepCopy(input, input1))


console.log(isDeepCopy(input, JSON.parse(JSON.stringify(input))))

console.log(isDeepCopy(input, structuredClone(input)))



function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.map(item => deepCopy(item));
  }

  if (obj instanceof Set) {
    const copy = new Set();
    obj.forEach(value => copy.add(deepCopy(value)));
    return copy;
  }

  if (obj instanceof Map) {
    const copy = new Map();
    obj.forEach((value, key) => copy.set(key, deepCopy(value)));
    return copy;
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}
// console.log(structuredClone(input))

// console.log(JSON.parse(JSON.stringify(input)))

//shallowCopy
